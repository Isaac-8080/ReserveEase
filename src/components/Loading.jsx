
const Loading = ({ message }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>{message}</p>
      </div>
    </>
  )
}

export default Loading
