import Card from "./Card";

const cardList = ({ robots }) => {
  return !robots.length ? (
    <h1 className="ma6">{"Sorry , We couldn't find any friend "}</h1>
  ) : (
    <div>
      {robots.map((robot) => (
        //   with every loop we should add the Key property
        // any thing JavaScript we should put it between {}
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
          username={robot.username}
        />
      ))}
    </div>
  );
};
export default cardList;
