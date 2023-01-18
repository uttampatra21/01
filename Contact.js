const contact = document.querySelector("#contact");
contact.innerHTML = `
<div class="send_message">
<form action="">
    <input type="text" name="myName" id="name" placeholder="Name">
    <input type="email" name="email" id="email" placeholder="Email">
    <input type="text" name="subject" id="subject" placeholder="Subject">
    <textarea name="message" id="message" cols="20" rows="8" placeholder="Message" ></textarea>
    <input type="submit" class="submit" value="Send">
</form>
</div>
<div class="location">
<div class="col_1">
    <h3>LOCATION</h3>
    <hr>
    <div class="address">
            <i class="bi bi-geo-alt-fill"></i>
            <p>Market 1, xxxx Colony, Mangalpur Road, Beside xxx Shop, West Bengal 721441</p>
    </div>
    <div class="phone">
            <i class="bi bi-telephone"></i>
            <p>+91 9635398574</p>
    </div>
    <div class="phone">
            <i class="bi bi-envelope"></i>
            <div>
                <p>care.digitalhub@gmail.com</p> 
                <p>official.digitalhub@gmail.com</p>
            </div> 
    </div>
</div>
<div class="col_2">
    <hr>
    <div class="col_2_div">
        <i class="bi bi-clock"></i>
        <div class="time">
            <p>Monday - Saturday - 10:00am to 7:00pm</p>
            <p>Note: All Commercial Holidays are Applicable 24 x 7 Live Customer Support Available</p>
        </div>
    </div>
</div>
</div>
`;