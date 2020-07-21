import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser, setAlert } from '../../../actions';
import { useHistory } from "react-router-dom";
import Alert from '../layout/alert'


const SigninForm = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
    });
    const { email, password } = values;
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        getUser({ email, password })
            .then(data => {
                dispatch(setUser());
                if (!data.error) {
                    history.push("/")
                } else {
                    /* dispatch(setAlert("Les données saisies doivent être inccorectes", "danger")) */
                }

            })};
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">
                        Email
                </label>
                    <input value={email} onChange={handleChange('email')} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">
                        Password
                </label>
                    <input value={password} onChange={handleChange('password')} type="password" className="form-control" />
                </div>
                <Alert msg="Les données saisies doivent être inccorectes" alertType="danger" />
                <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    }

    export default SigninForm