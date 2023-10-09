// start what we do section
let whatWDArr = [
    {fa: 'fas fa-users', title:'Business Consultancy'},
    {fa: 'fas fa-chart-line', title:'Help To Grow Business'},
    {fa: 'fas fa-headset', title:'Great Support'},
]
whatWDFun();
function whatWDFun(){
    let whatWeDo = '';
    for (let i = 0; i < whatWDArr.length; i++) {
        whatWeDo += `
        <div class="col-md-4">
        <div class="items text-center">
          <i class="${whatWDArr[i].fa}"></i>
          <h3>${whatWDArr[i].title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ul.
          </p>
        </div>
      </div>
        `      
    }
    document.getElementById('whatWeDo').innerHTML = whatWeDo;
}

// start service section
let serviceArr = [
    {fa: 'fas fa-users', title:'Busisness Planning'},
    {fa: 'fas fa-users-cog', title:'Busisness Consultency'},
    {fa: 'fas fa-chart-line', title:'Financial Services'},
    {fa: 'fas fa-skull-crossbones', title:'Risk Management'},
    {fa: 'fas fa-chalkboard-teacher', title:'Expert Advisers'},
    {fa: 'fas fa-headset', title:'24/7 Customer Support'},
]
serviceFn()
function serviceFn(){
    let serv= '';
    serviceArr.forEach(el => {
        serv += `
        <div class="col-lg-4 col-md-6">
        <div class="serv text-center">
          <i class="${el.fa}"></i>
          <h3>${el.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ul.
          </p>
          <a href="#" class="">Learn More</a>
        </div>
      </div>
        `
    });
    document.getElementById('service').innerHTML = serv;
}

// start counter section
let counterArr = [
    {countNumber: '2556', title:'Days Worked'},
    {countNumber: '326', title:'Project Finished'},
    {countNumber: '1526', title:'Coffee Cup'},
    {countNumber: '856', title:'Client Satisfied'},
]
counterFn()
function counterFn(){
    let counter =''
  for (let i = 0; i < counterArr.length; i++) {
        counter += `
        <div class="col-lg-3 col-md-6">
        <div class="cont d-flex text-white my-5">
          <img src="images/counter/counter${i+1}.png" alt="" />
          <div class="count-content">
            <h3 class="counter">${counterArr[i].countNumber}</h3>
            <h3>${counterArr[i].title}</h3>
          </div>
        </div>
      </div> 
        `
    } 
    document.getElementById('counterT').innerHTML = counter;
}

// start finished projects
let project = ''
for (let i = 0; i < 4; i++) {
    project += `
    <div class="col-md-6 mb-5">
    <div class="projects">
      <img src="images/project/project${i+2}.jpg" alt="" />
      <div class="layer d-flex justify-content-center align-items-center flex-column text-center text-white">
        <i class="fas fa-link fa-lg mb-3"></i>
        <div class="layerContent text-white">
          <a href="#">Aquisition Plan</a>
          <p>Busisness Planning</p>
        </div>
      </div>
    </div>
  </div>
    ` 
}
document.getElementById('Projects').innerHTML = project

// start team section
let team = ''
for (let i = 0; i < 4; i++) {
    team += `
    <div class="col-lg-3 col-md-6 mb-5">
    <div class="person">
      <img src="images/team/team${i+1}.jpg" alt="team's person" class="w-100" />
      <div class="personInfo">
        <h5>Tom Hanks</h5>
        <p>founder & CEO</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  </div>
    ` 
}
document.getElementById('ourTeam').innerHTML = team;

// start pricing 
let priceArr = [
  {planTitle:'Basic', planPrice:'$99', user:'01', project:'01', team:'01'},
  {planTitle:'Standard', planPrice:'$299', user:'05', project:'05', team:'05'},
  {planTitle:'Advanced', planPrice:'$499', user:'10', project:'10', team:'10'},
  {planTitle:'Unlimited', planPrice:'$1099', user:'Unlimited', project:'Unlimited', team:'Unlimited'},
]
pricingFn()
function pricingFn(){
  let price=''
  for (let i = 0; i < priceArr.length; i++) {
    price += `
      <div class="col-lg-3 col-md-6">
              <div class="pricingItem text-center text-white">
                <div class="num p-3">
                  <h5>${priceArr[i].planTitle}</h5>
                  <h3>${priceArr[i].planPrice}</h3>
                  <h5>Mounthly</h5>
                  ${(i == 1)?'<i class="fas fa-star"></i>':''}
                </div>
                <div class="pricingBenfit p-5">
                  <ul class="list-unstyled">
                    <li>${priceArr[i].user} User</li>
                    <li>${priceArr[i].project} Projects</li>
                    <li>${priceArr[i].team} Advisor Team</li>
                    <li>Complete Statistics</li>
                    <li>E-Mail Support</li>
                  </ul>
                  <a href="#">Sign Up Now</a>
                </div>
              </div>
        </div>
    `
  }
  document.getElementById('pricePlan').innerHTML = price;
}

//start latest news
let newsArr = [
    {title:'The Pros And Cons Of Starting An Online ConsultingBusiness'},
    {title:'8 Secrets For Your Successful Business Mentor Won\'t Tell You'},
    {title:'Hire A Branding Consultant With A Similar Aesthetic To Your Own'},
]
newsFn()
function newsFn(){
    let news = ''
    for (let i = 0; i < newsArr.length; i++) {
        news += `
        <div class="col-md-4">
        <div class="news">
          <div class="newsIMG mb-3">
            <div class="layer d-flex justify-content-center align-items-center text-center text-white">
              <i class="fas fa-link fa-lg mb-3"></i>
            </div>
            <img src="images/blog/bl${i+1}.jpg" alt="" class="w-100" />
          </div>
          <div class="newsContent px-4">
            <a href="#">${newsArr[i].title}</a>
            <p>
              Posted By: <span>Mick Steven</span> // On
              <span>12th June, 2045</span>
            </p>
          </div>
        </div>
      </div>
        `
    }
    document.getElementById('latestNews').innerHTML = news;
}

$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000
});

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    })
})






















