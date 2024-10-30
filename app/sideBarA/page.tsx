
export default function SideBarA() {
  return (
    <form >
      <label>
        Name:
        <input
          type="text"
          name="name"
        />
      </label>
      <br />
      <label>   

        Email:
        <input
          type="email"
          name="email"

        />
      </label>
      <br   
 />
      <button type="submit">Submit</button>
    </form>
  );
}