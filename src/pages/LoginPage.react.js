import React, { Component } from 'react';
import { Button, Form, Input, Label, Alert, InputGroup, InputGroupAddon, InputGroupText, Row, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { authenticationService } from '../services/authentication-service';
import { Redirect } from 'react-router-dom';
import "./loginPage.css";




class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            statutLogin: '',
            alerteErrorIsOpen: false,
            typePassword: 'password',
        }
    }

    handleTypePasswordChange = () => {

        this.setState({ typePassword: 'text' });

    }

    handleTypePasswordText = () => {

        this.setState({ typePassword: 'password' });
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    login = () => {
        const { username, password } = this.state
        let secret = password
        authenticationService.login(username, password, secret)
            .then(user => {
                console.log('user result', user)
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from); 
            })

            .catch(() => {
                setTimeout(() => {
                    this.setState({ statutLogin: 'ERROR' });
                }, 1500)
                setTimeout(() => {
                    this.setState({ statutLogin: '' });
                }, 10000)
            });
        /*.catch(() => {
            setTimeout(() => {
                this.setState({ alerteErrorIsOpen: !this.state.alerteErrorIsOpen });
            }, 1500)
        });*/
    }

    handleClose = () => {
        this.setState({ alerteErrorIsOpen: !this.state.alerteErrorIsOpen });
    }


    render() {
        const {
            alerteErrorIsOpen,
            statutLogin,
            typePassword,

        } = this.state

        if (authenticationService.currentUserValue) {
            console.log('Login page current user', authenticationService.currentUserValue)
            return <Redirect to='/' />
        }

        return (
            <div className="Applogin">
                {/* Login box.scss */}
                {/* ============================================================== */}
                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" >
                    <div className="auth-box" >
                        <div id="loginform">
                            <div className="logo">
                                <span className="db"><img src={'./demo/logo.png'} className="img-avatar" alt="Connexion" /></span>
                                <h6 className="font-medium m-b-20">ADMINISTRATION</h6>

                                {
                                    (statutLogin === 'ERROR') &&
                                    <Alert color="danger">
                                        Indentifiant ou mot de passe incorrect, <br /> Veuillez réessayer
                                    </Alert>
                                }
                            </div>
                            {/* Form */}
                            <div className="row">
                                <div className="col-12">
                                    <form className="form-horizontal m-t-20" id="loginform"  >
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="ti-user" /></span>
                                            </div>
                                            <Input onChange={this.handleUsernameChange} type="text" className="form-control form-control-lg" placeholder="Identifiant" aria-label="Username" aria-describedby="basic-addon1" autoComplete="username" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon2"><i className="ti-pencil" /></span>
                                            </div>
                                            <Input onChange={this.handlePasswordChange} type={typePassword} className="form-control form-control-lg" placeholder="Mot de passe" aria-label="Password" aria-describedby="basic-addon1" autoComplete="current-password" required />
                                            {(typePassword === 'password') &&
                                                <Button type="button" id="eye" onClick={this.handleTypePasswordChange} title="Montrer mot de passe" >
                                                    <i className="fa fa-eye" />
                                                </Button>
                                            }
                                            {(typePassword === 'text') &&
                                                <Button type="button" id="eye" onClick={this.handleTypePasswordText} title="Cacher mot de passe" >
                                                    <i className="fa fa-eye-slash" />
                                                </Button>
                                            }
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <div className="custom-control custom-checkbox">
                                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <Label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</Label>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <div className="col-xs-12 p-b-20">
                                                <Button onClick={this.login} color= "primary" className="btn btn-block btn-lg btn-info" >Se connecter</Button>
                                            </div>
                                        </div>

                                        <div className="form-group m-b-0 m-t-10">
                                            <div className="col-sm-12 text-center">
                                                Vous n'avez pas de compte? <a href="" className="text-info m-l-5"><b>Contacter Administrateur systeme</b></a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                { /* DEBUT MODAL ERREUR */}
                <Modal className="d-flex justify-content-center" isOpen={alerteErrorIsOpen} toggle={() => this.setState({ alerteErrorIsOpen: !this.state.alerteErrorIsOpen })} animation={true} className="modal-dialog modal-dialog-centered modal-sm">

                    <ModalHeader className="d-flex justify-content-center" style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
                        <div className="d-flex justify-content-center">
                            <i className="fa  fa-exclamation-circle text-danger fa-3x" style={{ color: 'red' }} ></i> <br />

                        </div>
                        <div >
                            Informations incorrect <br />
                              Veuillez réessayer
                              </div>
                    </ModalHeader>
                    <ModalFooter className="d-flex justify-content-center">
                        <Button color="danger" onClick={this.handleClose}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                { /* DEBUT MODAL ERREUR */}
            </div>
        );
    }
}

export default Login;
