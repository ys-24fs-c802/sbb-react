const cardStyle = {
  backgroundColor: 'white',
  boxShadow:'0 4ps 6px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  overflow: 'hidden'
};

const cardContentStyle = {
  padding: '16px'
}

const Card = ({children, style, ...props}) => {
  return (
    <div style={{...cardStyle, ...style}} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({children, style, ...props}) => {
  return (
    <div style={{...cardContentStyle, ...style}} {...props}>
      {children}
    </div>
  )
}

export {Card, CardContent};