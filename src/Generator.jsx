import React, { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/Check';
import DoneAll from '@material-ui/icons/DoneAll';
import {CopyToClipboard} from 'react-copy-to-clipboard';



const Generator = () =>{
const [backcolor, setbackcolor] = useState('white');
const [passerror, setpasserror] = useState();
const [length, setlength] = useState(6);
const [lenerror, setlenerror] = useState();
const [password, setpassword] = useState();
const [erroricon, seterroricon] = useState('hidden');
const [warningicon, setwarningicon] = useState('hidden');
const [done, setdone] = useState('hidden');
const [doneall, setdoneall] = useState('hidden'); 
const [copy, setcopy] = useState();

const change = () =>{
    setcopy();
    const pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*";
    let  a = '';
    if(length == '' ||  isNaN(length)){
        setlenerror('Enter a valid length');
        setbackcolor('white');
        setpassword(a);
        setpasserror();
        setwarningicon('hidden');
        setdone('hidden');
        setdoneall('hidden');
        seterroricon('hidden');
    }else if(length <6 || length >32){
        setlenerror('Length Must Be In Between 6 to 32');
        setbackcolor('white');
        setpassword(a);
        setpasserror();
        seterroricon('visible');
        setwarningicon('hidden');
        setdoneall('hidden');
        setdone('hidden');
    }
    else if(length == 6){
        setpasserror('Bad Password');
        setbackcolor('#ea4335');
        setwarningicon('visible');
        setdoneall('hidden');
        setdone('hidden');
        seterroricon('hidden');
        setlenerror();
    }
    else if(length >6 && length<=16){
        setpasserror('Weak Password');
        setbackcolor('orange');
        setwarningicon('visible');
        setdoneall('hidden');
        setdone('hidden');
        seterroricon('hidden');
        setlenerror();
    }
    else if(length >16 && length<=24){
        setpasserror('Medium Password');
        setbackcolor('green');
        setdone('visible');
        setdoneall('hidden');
        setwarningicon('hidden');
        seterroricon('hidden');
        setlenerror();
    }
    else{
        setpasserror('Strong Password');
        setbackcolor('darkgreen');
        setdoneall('visible');
        setdone('hidden');
        setwarningicon('hidden');
        seterroricon('hidden');

    }

    if(length >=6 && length<=32){
        for(let i=0;i<length;i++){
        const rno = Math.floor(Math.random() * pass.length);
        a += pass.substring(rno, rno + 1);
        }
        return setpassword(a);
    }
    }
    
    const copypassword = () =>{
        setcopy('copied');
    }

    return(
        <>
        <section className="generator">
            <div className="d1">
                <p className="p1">PASSWORD GENERATOR</p>
                <p className="p2">Generate a Strong Password</p>
                <p className="p3">Use Our Online Password Generator to instantly create a strong, Random Password </p>
            </div>
            <br/>
            <div className="d2" style={{backgroundColor:`${backcolor}`}}>
                <div>
                <input type="text" readOnly value={password} className="password" maxLength="32" minLength="6"/>
                <CopyToClipboard text={password}>
                <button onClick={copypassword}>Copy Password</button>
                </CopyToClipboard><span style={{padding:'10px', color:'black', fontSize:'20px', fontWeight:'1000'}}>{copy}</span>
                </div>
                <div>
                <p><Check style={{color:'black', visibility:`${done}`}}/><DoneAll style={{color:'black', visibility:`${doneall}`}}/><WarningIcon style={{color:'black', visibility:`${warningicon}`}} />{passerror}</p>
                </div>
            </div>
            <br/>
            <div className="d3">
            <div>
                <input type="text" value={length} onChange={(e) =>{
                    setlength(e.target.value);
                }}  className="length" maxLength="2" minLength="1"/>
                <button onClick={change}>Generate Password</button>
                </div>
                <div>
                <p><ErrorIcon style={{color:'black', visibility:`${erroricon}`}}/>{lenerror}</p>
                </div>
            </div>
            <br/>
        </section>
        </>
    )
}
export default Generator;