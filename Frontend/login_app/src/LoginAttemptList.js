import React,{useState} from "react";
import "./LoginAttemptList.css";

const LoginAttemptList = ({ attempts }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	  };
	  const filteredAttempts = attempts.filter((attempt) =>
    attempt.toLowerCase().includes(searchTerm.toLowerCase())
  );
	return (
	  <div className="Attempt-List-Main">
		<p>Recent activity</p>
		<input
        type="text"
        placeholder="Filter..."
        value={searchTerm}
        onChange={handleSearch}
      />
		{<ul className="Attempt-List">
		  {filteredAttempts.map((username, index) => (
			<li key={index}>
			   {username}
			</li>
		  ))}
		</ul> }
	  </div>
	);
  };

export default LoginAttemptList;
