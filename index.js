const Button = props => {
  const {className,text} = props;
  return(
      <button className = {`button ${className}`}>{text}</button>
  );
};

const element = (
    <div className="social-buttons-container">
        <div className = "head-buttons-container">
            <h1 className="main-heading">Social Buttons</h1>
            <div className="buttons-container">
                <Button className = "like-button" text = "Like"/>>
                <Button className"comment-button" text = "Comment"/>
                <Button className="share-button" text = "Share"/>
            </div>
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById('root'))
