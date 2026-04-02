import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {

  const {
    role,
    setRole
  } = useContext(AppContext);

  return (

    <div className="
    flex
    justify-between
    items-center
    p-4
    bg-blue-600
    text-white
    ">

      <h1 className="
      text-xl
      font-bold
      ">
        Finance Dashboard
      </h1>

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
        className="
        text-black
        px-2
        py-1
        rounded
        "
      >

        <option value="viewer">
          Viewer
        </option>

        <option value="admin">
          Admin
        </option>

      </select>

    </div>

  );

};

export default Header;