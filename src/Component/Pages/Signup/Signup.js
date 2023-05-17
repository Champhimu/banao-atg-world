import React, { useContext, useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import abstract from '../../../Asset/images/atg_illustration.png'
import Login from './Login'
import { MyContext } from '../../../App'

const Signup = () => {

    const {isSignedIn, setIsSignedIn} = useContext(MyContext);

    console.log("Signup: "+isSignedIn);
    
  return (
    <div>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <button className='closebtn' style={{position: 'relative', backgroundColor: 'transparent', border: 'none', top: '14%', left: '75%', borderRadius: '100%', backgroundColor: 'white', opacity: 0.7}} type="button" data-bs-dismiss="modal" aria-label="Close"><MdOutlineClose fontSize={'1.5em'} style={{}} /></button> 
    <div class="modal-dialog modal-lg modal-dialog-centered">
                <div style={{borderRadius: '8px', border: 'none'}} class="modal-content">
                <div style={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px', border: 'none', backgroundColor: '#EFFFF4', color: '#008A45', fontSize: '15px'}} class="modal-header">
                    <h7 style={{margin: '0 auto'}} class="modal-title" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h7>
                </div>
                <div class="modal-body">
                    <div style={{marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight: '700'}}>Create Account</h3>
                        <p style={{fontSize: '15px'}}>Already have an account? <span data-bs-toggle="modal" data-bs-target="#signupmodal" data-bs-dismiss="modal" style={{cursor: 'pointer', color: 'blue'}}>Sign In</span></p>
                    </div>
                    <br />
                    <div style={{marginBottom: '5px', marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
                        <div style={{width: '50%'}}>
                            <div style={{display: 'flex'}}>
                            <input style={{height: '45px', borderRight: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="First Name" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Last Name" aria-describedby="addon-wrapping" />
                            </div>
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Email" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Confirm Password" aria-describedby="addon-wrapping" />
                            <button onClick={() => setIsSignedIn(true)} data-bs-dismiss="modal" style={{height: '45px', marginTop: '15px', borderRadius: '25px', width: '100%'}} type="button" class="btn btn-primary">Create Account</button>
                            <br /><br />
                            <button onClick={() => setIsSignedIn(true)} data-bs-dismiss="modal" style={{height: '40px', marginBottom: '5px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                {/* <img alt='fb sign up' src={fblogo} /> */}
                                <FaFacebook color='blue' fontSize={'1.2em'}/> Sign up with Facebook
                            </button>
                            <button onClick={() => setIsSignedIn(true)} data-bs-dismiss="modal" style={{height: '40px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                {/* <img alt='google sign up' src={glogo} /> */}
                                <FcGoogle fontSize={'1.2em'} /> Sign up with Google
                            </button>
                        </div>
                        <div style={{display: 'grid', width: '50%'}}>
                            <img style={{margin:'0 auto'}} alt='abstract' src={abstract} />
                            <p style={{marginTop: '10px', textAlign: 'center', color: 'gray', fontSize: '11px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>    
                </div></div>
</div>

<Login />
</div>
  )
}

export default Signup
