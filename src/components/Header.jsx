import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar style={{backgroundColor:"black"}} >
            <Container>
                <Navbar.Brand >
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white', fontSize: '30px',fontWeight:"bolder" }}> <i style={{color:"white"}} class="fa-solid fa-utensils"></i>{' '}
                    The Tasty Palette</Link>
                    

                </Navbar.Brand>
                
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
