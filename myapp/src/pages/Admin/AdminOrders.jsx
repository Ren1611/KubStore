import React, { useEffect } from "react";
import { useProduct } from "../../MainConrext/MainContext";

const AdminOrders = () => {
  const { order, readOrder, deleteOrder } = useProduct();

  useEffect(() => {
    readOrder();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders (Admin)</h1>
      {order?.length === 0 ? (
        <p>No orders</p>
      ) : (
        <ul>
          {order.map((o, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              <strong>{o.name || o.title}</strong> — {o.price}$
              <button style={{ marginLeft: "10px" }} onClick={() => deleteOrder(o.id || o._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminOrders;
