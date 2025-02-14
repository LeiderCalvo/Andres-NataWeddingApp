import { Header } from "./pages/header/header";
import { Ceremonia } from "./pages/ceremonia/ceremonia";
import { Counter } from "./pages/counter/counter";
import { Others } from "./pages/others/others";
import { Questions } from "./pages/questions/questions";
import { Payments } from "./pages/payments/payments";
import { Booking } from "./pages/booking/booking";
import { Form } from "./pages/form/form";
import { Doubts } from "./pages/doubts/doubts";
import { Package } from "./pages/package/package";
import { Continue } from "./pages/continue/continue";
import { Celebration } from "./pages/celebration/celebration";
import { Details } from "./pages/details/details";
import { History } from "./pages/history/history";
import { Vers } from "./pages/vers/vers";
import { Invitation } from "./pages/invitation/invitation";
import { Dressing } from "./pages/dressing/dressing";
import { Expenses } from "./pages/expenses/expenses";
import { Waiting } from "./pages/waiting/waiting";
import { Ending } from "./pages/ending/ending";


function App() {
  return (
    <>
      <Header />
      <Invitation />
      {/* <History />
      <Details /> */}
      {/* history */}
      <Vers />
      <Ceremonia />
      <Celebration />
      <Counter />
      <Continue />
      <Package />
      <Doubts />
      <Form />
      <Booking />
      <Payments />
      <Questions />
      <Others />
      <Dressing />
      <Expenses />
      <Waiting />
      <Ending />
    </>
  )
}

export default App
