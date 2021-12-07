import React from 'react'

function NewUser() {

    //use this function when you submit your form!
    function handleSubmit(event) {
        //google what this function does below: (hint: something about refreshing pages)
        event.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/users`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application.json'
                },
                body: JSON
            })
        }
    }