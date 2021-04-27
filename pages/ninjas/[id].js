export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const info = await res.json();

  const paths = info.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
      paths,
      fallback: false
  }
};

// how many html pages needs to be made for our data, thats why getStaticPaths is needed 

export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {
    const {name, email, phone} = ninja;
  return (
    <div>
      <h2>Details page</h2>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{phone}</p>
    </div>
  );
};

export default Details;
