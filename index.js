const express = require('express');
const app=express();


MAILER_TRIP_KEY='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiN2FlNDg2MGZmMGZlMWE5ZjFlMjIyNTAxYzg3MDc5MmIzNDk5NGVhNjQwMDMyMzllMDg2ZjM3YmNlZmRiM2Y5Nzc5MDExZmY4ODAzNGY4MjYiLCJpYXQiOjE2NTY0OTY1OTIuODM1NjY2LCJuYmYiOjE2NTY0OTY1OTIuODM1NjY5LCJleHAiOjQ4MTIxNzAxOTIuODMxMTksInN1YiI6IjExMDk5MiIsInNjb3BlcyI6W119.TbjC9mxFrh6p1S3bPuW6Erf-j4pJ0pmfsy1MNdedg8V8T4XAPA9sj5sYkjITfojaShhgqj-DpbEdtcUp_8REwS-cHUIQ3uHFGAKsVmQf2geCsGxhCmfcOzaGrmPHaUC2FE3vR4EQPnn2lPjZfWck5seydywQQX1Hp8V-AynoDKYF9Nlv8nD1Pj3ispnFGOkZMWtaPxppond9m6blHzsgV1fq5m1Dkf2KUuCoS0Y53RPzxKDxqbeSBgHW8DVtCsOMohjoE1rtR3W5_hp3VTVPjcoERysq8QDW-W4UP29xMD2Zdaul45dZ6vR0tP0-WMPX6lOb-tbFvsmnRGm4rRzLlif5AXisSJn2zpraSTuyCFtgEkpMoK9ZrWWg2nYGVsj9gw_jWx4Iaqo6LqSjn47PGGoI1iuoKTipk6JzY5gp4UKGK2RPV1XnubfnlU977iYpEsN2gnCxx_8sls_GIYRKFxx2dLmQrKTxEry0wZrXO6AA-LI1tc2MK9W1Czr1aoxT8btddm8JuxxfkIcFIXMXd9FDdy2vQidodE-Fm7PFKJPzlTZPlrjcltb0qPWLsXSiMieV2qPCRcKYx-LcBpHU-zHRSpaUH_BEkXxH7oz3Y4OEFvPFC5pA_TECXd4hlAN7VlU-haBGtnf_Bg1DT0fOU3hKMSQqsy3EYIK15x39Nlc'

const MailerLite = require('mailerlite-api-v2-node').default

const mailerLite = MailerLite(MAILER_TRIP_KEY)

app.use(express.static('build'))

async function getAllGroups() {
    const groups = await mailerLite.getGroups()
    console.log(groups)
  }

async function addSubscriber(email,name){
 const response=   await mailerLite.addSubscriber({
        name:name,
        email:email
    });
    //console.log(response)
    await addUserToGroup(response)
}

  async function addUserToGroup(id){
    const response=await mailerLite.addSubscriberToGroup(59241517725779657,{
        name:"vikas",
        email:"vikas@radialcode.com",
        fields:{
            'company':'radialcode',
            'city':'pune',
            'country':'india'
        },
        type:'subscriber'
    })
    console.log(response)
  }

app.use('/',async(req,res)=>{
    await addSubscriber('vikas@radaialcode.com','vikas');
    return res.sendFile(__dirname+'/build/index.html')
});


app.listen(3000,()=>{
    console.log('listening on')
})