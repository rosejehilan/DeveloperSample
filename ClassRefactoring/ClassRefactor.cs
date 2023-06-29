using System;

namespace DeveloperSample.ClassRefactoring
{
    public enum SwallowType
    {
        African, European
    }

    public enum SwallowLoad
    {
        None, Coconut
    }

    public class SwallowFactory
    {
        public Swallow GetSwallow(SwallowType swallowType) => new Swallow(swallowType);
    }

    public class Swallow
    {
        public SwallowType Type { get; }
        public SwallowLoad Load { get; private set; }

        public Swallow(SwallowType swallowType)
        {
            Type = swallowType;
        }

        public void ApplyLoad(SwallowLoad load)
        {
            Load = load;
        }

        public double GetAirspeedVelocity()
        {

            double airspeedVelocity;

            switch (Type)
            {
                case SwallowType.African:
                    airspeedVelocity = Load == SwallowLoad.None ? 22 : 18;
                    break;

                case SwallowType.European:
                    airspeedVelocity = Load == SwallowLoad.None ? 20 : 16;
                    break;

                default:
                    throw new InvalidOperationException();
            }

            return airspeedVelocity;
        }
    }
}