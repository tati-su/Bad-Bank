function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [deposit, setDeposit]         = React.useState(0);
  const ctx = React.useContext(UserContext); 

  //for onclick button: add to account and change show to false. update state 
  function depositAmount() {
  setShow(!show)
  }


  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="depositamount" placeholder="Deposit Amount" 
              //value={depositamount}
              onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="deposit" className="btn btn-light" onClick={() => {
        depositAmount(); }}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="deposit" className="btn btn-light" >Deposit more</button>
              </>
            )}
    />
  )
  
}
