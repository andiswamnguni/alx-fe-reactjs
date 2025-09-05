const UserProfile = (props) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "300px",
      margin: "20px auto",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
