export default function NotificationItem({ id, name, message, onClear }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div>
        <strong>{name}</strong>: {message}
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => onClear(id)}>
        Clear
      </button>
    </li>
  );
}