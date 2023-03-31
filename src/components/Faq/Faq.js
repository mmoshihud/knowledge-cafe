const Faq = () => {
  return (
    <div className="my-10 text-base-content">
      <h1 className="text-center text-3xl font-extrabold">
        Frequently Asked Question
      </h1>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-4">
          What is the difference between props and states?
        </h1>
        <p className="text-xl font-semibold">
          In React there props and states are two way of managing data. Props
          are used to pass data to child components. Props are read only value
          we can't change the value of props in child component. On the other
          hand, useState is a react hook where we can initialize value and we
          can use the value in that component only. It could be anything like
          function, variable, object etc. So, in useState we can manage data in
          the same component only and change data where in props we can pass
          data but can't modify data in child component.
        </p>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-4">How does useState work?</h1>
        <p className="text-xl font-semibold">
          useState is a hook in React that allows us to add state to components.
          The useState hook returns an array with two elements which are the
          current state value and a function to update that value.
        </p>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-4">
          What is the purpose of useEffect other than fetching data?
        </h1>
        <p className="text-xl font-semibold">
          The useEffect hook in React is used to manage side effect. Using side
          effect I can do other things that like Effect Cleanup. We can check
          memory leak of our application through useEffect. We can use Multiple
          Effects to Separate Concerns of our application
        </p>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-4">How Does React work?</h1>
        <p className="text-xl font-semibold">
          React is a JavaScript library for building user interfaces. It uses a
          virtual DOM to efficiently update the UI in response to changes in
          user interactions. It use component to structure as a tree of
          components. Each component is responsible for rendering a part of the
          UI. When we change code it update that particular code and change the
          UI. React use event handle smartly, Instead of manually updating the
          UI in response to these events, I can define a function that updates
          the component's state.
        </p>
      </div>
    </div>
  );
};

export default Faq;
