function Screen9Box() {
  return (
    <div>


<div className="main-container">
    <div >
        <div className="box-div">
            <p>TERM HMARKS</p>
            <b>123456789987654321</b>
            <h6>300</h6>
            <h5 className="gradient-text-color">LOYALITIES</h5>
        </div>
        <img className="img-div" src="/Images/circlebox.png" alt=""/>
    </div>
</div>

<style global jsx>
  {`
    .main-container{
      background: linear-gradient(to right,#676161, #e1dddd);
      margin: 0% 0% 0% 12%;
      width: 220px;
      height: 100px;
      border: 2px solid black;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      margin-right: 51px;
    }
    .img-div{
        width: 60px;
        border-radius: 50%;
        position: relative;
        right: 31px;
        bottom: 78px;
      }
      .box-div {
          color: white;
          padding: 7px 0px 2px 35px;
        }
        .box-div p{
            font-size: 10px;
            margin: 0px 0px -5px 0px;
          }
          .box-div h5{
              font-size: 16px;
              font-weight: 500;
              color: #ef47a2;
            }
            .box-div b{
                font-size: 14px;
              }
              .box-div h6{
                  font-weight: bold;
                }
  
  `}
</style>



      
    </div>
  );
}

export default Screen9Box;
