import "./App.css";
import Item from "./Item";
import users, {reviews, orders, revenues} from "./mockData";

function App() {
  return (
    <div className="flex justify-around ">
      <Item icon="dollar" color="bg-cyan-700" data={revenues} title={"Monthly revenue"}  />
      <Item icon="cart" color="bg-orange-400"  data={orders} title={"New Orders"} />
      <Item icon="message" color="bg-red-600" data={reviews} title={"Pending Reviews"} />
      <Item icon="addPerson" color="bg-green-500 " data={users} title={"New Customers"} />
    </div>
  );
}

export default App;
