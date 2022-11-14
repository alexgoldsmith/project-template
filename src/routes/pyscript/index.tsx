import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
      <script async src="https://pyscript.net/latest/pyscript.js"></script>
      <h1>test</h1>
      <div>
        <py-repl id="repl-1" auto-generate="true"></py-repl>
        <py-script>print("test")</py-script>
      </div>
    </>
  );
});
