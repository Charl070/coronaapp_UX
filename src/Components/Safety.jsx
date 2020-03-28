import React from 'react';
import './safety.css';
import Dambudzo from '../assets/pres.jpg';
import drop from '../assets/down-arrow.png';
import Navigation from './Navigation';
import Footer from './Footer';

function Safety() {
  return (
    <div>
      <div className="safe-container">
        <br/>
       <strong className="text-stron">The Basics</strong>
        <br/>
     <div className="safe-card">
      <ul>
          <li>
              <div className='dropdown'>
              <div className='question'>
                What Is Corona Virus?
                <div class="dropdown-content">
                <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. 
                    This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019
                    
                   </p>
                </div>
              </div>
              <div className='dropdown-icon'>
                <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                How Does The Virus Spread?
                <div class="dropdown-content">
                <p>People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.
                
                </p>
                </div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                How Dangerous Is The Virus?
                <div class="dropdown-content">
                <p>
There is no need to panic – 82% of COVID-19 cases are mild: patients only experience a slight fever, fatigue and a cough. 
Only about 6% of patients need intensive care. 
The vast majority of people can stay at home and get better without hospital treatment.
Early information out of China, where COVID-19 first started, shows that some people are at higher risk of getting very sick from this illness.This includes:

Older adults and People who have serious chronic medical conditions like:Heart disease, Diabetes,Lung disease
<br/>
                    
                </p></div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                What Are The Symptoms?
                <div class="dropdown-content">
                <p>People may experience:
Runny nose,
Sore throat,
Cough,
Fever or 
Difficulty breathing (severe cases)
If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include*:

Difficulty breathing or shortness of breath,
Persistent pain or pressure in the chest,
New confusion or inability to arouse,
Bluish lips or face
*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.
<br/>
                    </p>
                </div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
      </ul>
     </div>
     <br/>
     <strong className="protectionHeading">Protection</strong>
     <br/>
     <div className="safe-card">
      <ul>
          <li>
              <div className='dropdown'>
              <div className='question'>
                How Can I Protect Myself?
                <div class="dropdown-content">
                <p>You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:

Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
Avoid touching eyes, nose and mouth.
Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places  – especially if you are an older person or have diabetes, heart or lung disease.
Why? You have a higher chance of catching COVID-19 in one of these areas.
<br/>
                    </p>
                </div>
              </div>
              <div className='dropdown-icon'>
                <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                How Can I Protect Others?
                <div class="dropdown-content">
                <p>Stay home if you are sick, except to get medical care. Learn what to do if you are sick.
Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow.
If you are sick: You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to wear a facemask (for example, because it causes trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room.
<br/>
                    </p>
                </div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                How Can I Protect My Children?
                <div class="dropdown-content">
                <p>

                Based on available evidence, children do not appear to be at higher risk for COVID-19 than adults. While some children and infants have been sick with COVID-19, adults make up most of the known cases to date. You can learn more about who is most at risk for health problems if they have COVID-19 infection on CDC’s current Risk Assessment page. Children may cause the virus to spread amongst other members of your family, You can encourage your child to help stop the spread of COVID-19 by teaching them to do the same things everyone should do to stay healthy.
                <br/>
                  </p>
                </div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
          <li>
              <div className='dropdown'>
              <div className='question'>
                Should I Wear A Mask?
                <div class="dropdown-content">
                <p>If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection.
Wear a mask if you are coughing or sneezing.
Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.
If you wear a mask, then you must know how to use it and dispose of it properly.
<br/>
                  </p>
                </div>
              </div>
              <div className='dropdown-icon'>
              <img src={drop} alt=""/>
              </div>
              </div>
             
          </li>
      </ul>
     </div>
   </div>
   <br/>
   <hr/>
   <br/>
   
   <Footer/>
    </div>
   
  );
}

export default Safety;
