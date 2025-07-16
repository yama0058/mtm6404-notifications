import { useState } from 'react'
import './App.css'
import notificationsData from './notifications'

import Container from './components/Container'
import Row from './components/Row'
import Column from './components/Column'
import NotificationList from './components/NotificationList'
import NotificationItem from './components/NotificationItem'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <Container>
      <Row>
        <Column>
          <h1>Notifications ({notifications.length})</h1>
          <button className="btn btn-outline-danger mb-3" onClick={clearAll}>
            Clear All
          </button>
          <NotificationList>
            {notifications.map(n => (
              <NotificationItem
                key={n.id}
                id={n.id}
                name={n.name}
                message={n.message}
                onClear={clearNotification}
              />
            ))}
          </NotificationList>
        </Column>
      </Row>
    </Container>
  )
}

export default App
