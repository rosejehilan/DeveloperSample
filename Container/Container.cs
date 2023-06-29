using System;
using System.Collections.Generic;

namespace DeveloperSample.Container
{
    public class Container
    {
        private readonly Dictionary<Type, Type> bindings;

        public Container()
        {
            bindings = new Dictionary<Type, Type>();
        }
        public void Bind(Type interfaceType, Type implementationType)
        {
            if (!interfaceType.IsInterface)
                throw new ArgumentException("interfaceType must be an interface.");

            if (!interfaceType.IsAssignableFrom(implementationType))
                throw new ArgumentException("concreteType must implement the interfaceType.");

            bindings[interfaceType] = implementationType;
        }
        public T Get<T>()
        {
            Type interfaceType = typeof(T);

            if (!bindings.TryGetValue(interfaceType, out Type concreteType))
                throw new InvalidOperationException($"No binding found for {interfaceType.FullName}.");

            if (!interfaceType.IsAssignableFrom(concreteType))
                throw new InvalidOperationException($"{concreteType.FullName} does not implement {interfaceType.FullName}.");

            return (T)Activator.CreateInstance(concreteType);
        }
    }
}