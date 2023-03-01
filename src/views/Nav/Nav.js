import { useState,React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser } from '@fortawesome/free-solid-svg-icons'
import "react-simple-keyboard/build/css/index.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from './youtube.png';
import '../scss/Nav.scss'
const Nav = (props) => {
  // const[email,setemail] = useState('')
  // const[password,setpassword] = useState('')

  // const [show, setShow] = useState(false);
  // let handleClose = () => setShow(false);
  // let handleShow = () => setShow(true);

  const [query,setquery] = useState('')
  let search =()=>{
  props.handlesearch(query)
  props.setisshow(false)
}
const something=(event)=> {
  if (event.keyCode === 13) {
    search()
  }
}
  return (
    <>
    {/* <Modal  show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Đăng Nhập</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@gmail.com"
            autoFocus
            value={email} onChange={(event)=>setemail(event.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="your password" value={password} onChange={(event)=>setpassword(event.target.value)}/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    bạn chưa có tài khoản?
      <Button variant="secondary" >
        register
      </Button>
      <Button variant="primary" >
        login
      </Button>
    </Modal.Footer>
    </Modal> */}
            <div className="nav-container">
        <div className="nav-left">
          <FontAwesomeIcon className="bars" icon={faBars} />
          <a href="http://localhost:3000/"><img src={logo} alt="Logo" className="logo-youtube"/></a>
          <span  className="span-logo">YOUTUBE </span>
        </div>
        <div className="nav-midde">
        <input className="input-search"   value={query} onKeyDown={(e) => something(e) } onChange={(event) =>setquery(event.target.value)} ></input>
          <button className="icon-search" onClick={search}>Search</button>
        </div>
        {/* <div className="nav-right">
          <Button variant="primary" onClick={handleShow}>
          <FontAwesomeIcon className="user" icon={faUser} />
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
