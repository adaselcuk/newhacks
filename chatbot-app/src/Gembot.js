import { useState } from "react";
import "./Gembot.css";

const GemBot = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const guideSummary = `72 Hours: Is Your Family Prepared?
If an emergency happens in your community, it may take emergency workers some time to reach you. You should be prepared to take care of yourself and your family for a minimum of 72 hours.

Learn how quick and easy it is to become better prepared to face a range of emergencies – anytime, anywhere. Use this guide to create your own emergency plan. Use the checklists to build a 72-hour emergency kit. These basic steps will help you take care of yourself and your loved ones during an emergency.

Our partners
This publication was developed in collaboration with:

Canadian Association of Chiefs of Police
Canadian Association of Fire Chiefs
Canadian Red Cross
St. John Ambulance
Salvation Army
Please note: Publications are not available in regular print format.

Step 1. Know the risks
Although the consequences of various disasters can be similar, knowing the risks in your region can help you better prepare. Across Canada, we face a number of hazards, such as floods in many provinces, earthquakes in British Columbia, blizzards in Nunavut and tornadoes in Ontario. In addition to natural disasters, there are other types of risks, such as power outages and industrial or transportation accidents.

Some of the risks below may be relevant to your community. Find out which ones by visiting GetPrepared.ca. You may want to identify the most likely ones for easy reference. You may also want to find out how disasters have impacted Canadians. Learn more about disasters, including those triggered by natural hazards, technological hazards or conflict by using the Canadian Disaster Database at: http://www.publicsafety.gc.ca/cdd

For more emergency preparedness information, visit GetPrepared.ca or follow @Get_Prepared on Twitter.

Step 2. Make a plan
Every Canadian household needs an emergency plan. It will help you and your family know what to do in case of an emergency. It will take you about 20 minutes to make your plan.

Your family may not be together when an emergency occurs. Plan how to meet or how to contact one another, and discuss what you would do in different situations.

Use the following pages to create your plan. Most of this information can be filled out on your own. You may need to get some information from your municipality and province/territory about their emergency plans. A list of provincial emergency management agencies is available at the end of this guide.

Keep this document in an easy-to-find, easy-to-remember place (for example, with your emergency kit). Photocopy this plan and keep it in your car and/or at work, and a copy close to your phone. If you completed your plan online, keep an electronic version on your computer.

Plan for specific risks
Public Safety Canada offers brochures on specific risks, such as earthquakes, power outages, floods and severe storms. Download copies from GetPrepared.ca.

Neighbourhood safety plan
Work with your neighbours to identify people who may need extra help during an emergency. To help make sure everyone is taken care of, assign “block buddies.”

Write yourself a reminder to update your emergency plan one year from now.

On this date next year, review your contact information, practise your emergency evacuation plans, change the batteries in your smoke alarm and carbon monoxide detector, and restock your kit(s). Change the batteries, food and water in your emergency kits once a year.

Household plan
Emergency exits

Draw up a floor plan of your home that shows all possible exits from each room. Plan a main exit route and an alternate exit route from each room. If you live in an apartment, plan to use the stairs instead of the elevators. If you are unable to use the stairs, notify emergency personnel ahead of time. Also, identify an evacuation route from your neighbourhood in case you need to leave in a hurry (and think of more than one option).

Meeting places

Identify safe places where everyone should meet if you cannot go home or you need to evacuate.

Safe meeting place near home:

___________________________________

Safe meeting place outside immediate neighbourhood:

___________________________________

___________________________________

Evacuation routes from neighbourhood:

___________________________________

___________________________________

Safe idea
Make copies of important documents

Make copies of birth and marriage certificates, passports, licences, wills, land deeds and insurance. Take photos of family members in case a lost persons record is created. Keep them in a safe place, both inside and outside your home. You might want to put them in a safety deposit box or give them to friends and family who live out of town.

Workplace
Learn about the emergency evacuation plans in place and what you will need to do. You may want to have some basic supplies at work, such as water and food that won't spoil, in case you need to stay put for a while.

Check  with your employer about workplace emergency plans, including fire alarms, emergency exits, meeting points, and designated safety personnel or floor wardens.

Children
Ask your children's school or daycare about their emergency policies. Find out how they will contact families during an emergency.

Find out what type of authorization the school or daycare requires to release your children to a designated person if you can't pick them up.

Make sure the school or daycare has updated contact information for parents, caregivers and designated persons.

Designated person 1: ______________________ Phone: __________________

Designated person 2: ______________________ Phone: __________________

School contact information: __________________________________________

Plan for pets
In case of an evacuation, remember that pets are not allowed in some public shelters or hotels. In case of an evacuation, prepare to take your pets with you to the home of a relative or friend, or take steps to identify pet-friendly hotels or pet boarding facilities in your area and further away from home.

Location and contact information :___________________________________

Special health needs
Establish a personal support network of friends, relatives, health-care providers, co-workers and neighbours who understand your special needs.

Write down details about:

Accommodation needs
Insurance information
Allergies
Medical conditions
Emergency contacts
Medication
Family medical history
Recent vaccinations
Health screenings
Surgeries
Keep a copy of this information in your emergency kit, and give a copy to your personal support network.

Talk to your doctor about preparing a grab-and-go bag, if possible, with a two-week supply of medication and medical supplies. Include prescriptions and medical documents. Remember that pharmacies may be closed for some time, even after an emergency is over.

Health information:

___________________________________

___________________________________

Medication and medical equipment:

___________________________________

___________________________________

Grab-and-go bag location:

___________________________________

___________________________________

Emergency numbers

Fire, police, ambulance: 9-1-1 (where available)

Other: ___________________________________________

Non-emergency numbers

Police:______________________________________

Fire: ____________________________________________

Health clinic: ____________________________________

Poison control: ______________________________________________________

Other contact numbers: ______________________________________________

Out-of-town contact

Name: ___________________________________________

Home phone: ____________________________________

Work phone: ____________________________________

Cell phone: ______________________________________

E-mail: __________________________________________

Home address:___________________________________

Family

Name:_____________________________

Home phone: ______________________

Work phone: ______________________

Cell phone: ________________________

E-mail: ____________________________

Home address:___________________________________

Friend/neighbour

Name: _____________________________

Home phone: ______________________

Work phone: ______________________

Cell phone: ________________________

E-mail: ____________________________

Home address:___________________________________

Arrange for each family member to call, e-mail or text the same out-of-town contact person in case of an emergency.

Choose an out-of-town contact who lives far enough away that he or she is unlikely to be affected by the same event. If you are new to Canada or have recently moved to a new area, make arrangements through friends, cultural associations or community organizations.

Family doctors

Patients' names: _____________________________________________________

Doctors' names and phone numbers: _________________________________

Insurance agent/company

Agent's/company's name: ___________________________________________

Phone: __________________________________________

Home and Car Policy numbers: ______________________________________________________

Home security system

Company's name:____________________________________________________

Phone: __________________________________________

Safe home instructions
Make sure you have a working carbon monoxide detector, smoke alarm, fire extinguisher and well-stocked first aid kit. If you live in an apartment, or if you are staying in a hotel, know where the fire alarms and at least two emergency exits are located.

Make sure you have a fire extinguisher on every level of your home, including one in your kitchen. Everyone in your home should know where to find the fire extinguishers. All capable adults and older children should know how to use it. See instructions regarding the lifetime of your fire extinguisher and check with your local fire department for more information.

Older children and adults should know how to turn off your home's water, electricity and gas. Make large, easy-to-see signs for water and gas shut-offs as well as for the electrical panel.

Teach children how and when to dial 9-1-1 as well as how to call the designated out-of-town contact.

Limit phone calls to urgent messages only. Keep calls short to free up the lines for others.

Fire extinguisher location:

___________________________________

Water valve location:

___________________________________

Utility company phone number:______________________________________

Electrical panel location:

____________________________________________

Utility company phone number:______________________________________

Gas valve location:

___________________________________

Utility company phone number: ______________________________________
(Shut off gas only when authorities tell you to do so.)

Floor drain location:

___________________________________

(Always make sure it is clear of boxes, furniture, etc., in case of flooding.)

Emergency instructions
Call 9-1-1 (where available) to report a fire, a crime or to save a life.

For non-emergency calls, use the ten-digit numbers listed in your local phone book, or this emergency plan, for police, fire and other health services.

When notifying emergency services of your location, provide the exact street or civic address and nearest intersection.

For the gas and water valves, keep shut-off instructions close by and read them carefully.

In an emergency

Follow your emergency plan.

Get your emergency kit.

Make sure you are safe before assisting others.

Listen to the radio or television for information from authorities. Local officials may advise you to stay where you are. Follow their instructions.

Stay put until all is safe or until you are ordered to evacuate.

Evacuation orders

Authorities will not ask you to leave your home unless they have reason to believe that you may be in danger.

If you are ordered to evacuate, take your emergency kit, your wallet, personal identification for each family member and copies of essential family documents with you. Bring a cellular phone and spare battery or charger with you, if you have one. Use travel routes specified by local authorities.

If you have time, call or e-mail your out-of-town contact. Tell them where you are going and when you expect to arrive. Once you are safe, let them know. Tell them if any family members have become separated.

If possible, leave a note telling others when you left and where you are. Shut off water and electricity if officials tell you to do so.

Leave natural gas service on unless officials tell you to turn it off. If you turn off the gas, the gas company has to reconnect it. In a major emergency, it could take weeks for a professional to respond.

Take pets with you. Lock your home. Follow instructions from authorities.

If you go to an evacuation centre, register your personal information at the registration desk. Do not return home until authorities advise that it is safe to do so.

Step 3. Get an emergency kit
In an emergency, you will need some basic supplies. You may need to get by without power or tap water. Be prepared to be self-sufficient for at least 72 hours.

You may have some of the items already, such as food, water and a battery-operated or crank flashlight. The key is to make sure they are organized and easy to find. Would you be able to find your flashlight in the dark?

Make sure your kit is easy to carry and everyone in the household knows where it is. Keep it in a backpack, duffle bag or suitcase with wheels, in an easy-to-reach, accessible place, such as your front-hall closet. If you have many people in your household, your emergency kit could get heavy. It's a good idea to separate some of these supplies in backpacks. That way, your kit will be more portable and each person can personalize his or her own grab-and-go emergency kit.

Basic emergency kit
Water – at least two litres of water per person per day; include small bottles that can be carried easily in case of an evacuation order
Food that won't spoil, such as canned food, energy bars and dried foods (replace food and water once a year)
Manual can-opener
Crank or battery-powered flashlight (and extra batteries). Replace batteries once a year.
Crank, battery-powered radio (and extra batteries) or Weatheradio
First aid kit
Extra keys to your car and house
Some cash in smaller bills, such as $10 bills and change for payphones
A copy of your emergency plan and contact information
If applicable, other items such as prescription medication, infant formula, equipment for people with disabilities, or food, water and medication for your pets or service animal (personalize according to your needs)
Recommended additional items
Two additional litres of water per person per day for cooking and cleaning
Candles and matches or lighter (place candles in deep, sturdy containers and do not burn unattended)
Change of clothing and footwear for each household member
Sleeping bag or warm blanket for each household member
Toiletries
Hand sanitizer
Utensils
Garbage bags
Toilet paper
 Water purifying tablets
Basic tools (hammer, pliers, wrench, screwdrivers, work gloves, dust mask, pocket knife)
A whistle (in case you need to attract attention)
Duct tape (to tape up windows, doors, air vents, etc.)
If you think your water is contaminated, check with your municipality or local authorities for details. When in doubt, do not drink water you suspect may be contaminated.

Keep some cash on hand, as automated bank machines and their networks may not work during an emergency. You may have difficulty using debit or credit cards.

Pre-packaged kits
The Canadian Red Cross has emergency preparedness kits available for purchase on its website. Various other kits and supplies are also available for sale from other commercial entities.

Emergency vehicle kit
Prepare a small kit and keep it in your vehicle.

The basic kit should include:

Blanket
Candle in a deep can and matches
Extra clothing and shoes
First aid kit with seatbelt cutter
Flashlight (crank or battery-powered). Replace batteries once a year.
Food that won't spoil (such as energy bars)
List of contact numbers
Radio (crank or battery-powered). Replace batteries once a year.
Small shovel, scraper and snowbrush
Warning light or road flares
Water
Whistle
Recommended additional items to keep in your vehicle

Antifreeze, windshield washer fluid
Fire extinguisher
Road maps
Sand, salt or cat litter (non-clumping)
Tow rope and jumper cables
Emergency Kit Basic Items
Water – at least two litres of water per person per day; include small bottles that can be carried easily in case of an evacuation order
Food that won't spoil, such as canned food, energy bars and dried foods (replace food and water once a year)
Manual can-opener
Crank or battery-powered flashlight (and extra batteries)
Crank or battery-powered radio (and extra batteries)
First aid kit
Extra keys to your car and house
Some cash in smaller bills, such as $10 bills and change for payphones
A copy of your emergency plan and contact information
Keep a corded phone in your home, as most cordless phones will not work during a power outage.

If applicable, other items such as prescription medication, infant formula, equipment for people with disabilities, or food, water and medication for your pets or service animal (personalize according to your needs).

Resources
To learn more about emergency preparedness, visit GetPrepared.ca.

Environment Canada Weather Office www.weatheroffice.gc.ca
1-900-565-4455; a $2.99 per-minute charge applies Check the blue pages in your local phonebook under Weather for weather reports and forecasting available by phone.
Canadian Red Cross www.redcross.ca/prepare
613-740-1900 or check for your local branch phone number.
St. John Ambulance www.sja.ca
613-236-7461 or check for your local branch phone number. Toll-free: 1-888-840-5646
Salvation Army www.SalvationArmy.ca
416-425-2111 or check for your local branch phone number.
Provincial and Territorial Resources
This publication was developed in collaboration with the provinces and territories:

Alberta
Alberta Emergency Management Agency
Telephone: (780) 422-9000 / Toll-free: 310-0000

British Columbia
British Columbia Emergency Management and Climate Readiness
Telephone: (250) 952-4913 / Emergency: 1-800-663-3456

Manitoba
Manitoba Emergency Management Organization
Telephone: (204) 945-3050 / Toll-free: 1-888-267-8298

New Brunswick
New Brunswick Emergency Measures Organization
Telephone: (506) 453-2133 / Toll-free 24 Hour line: 1-800-561-4034

Newfoundland and Labrador
Emergency Services Division Department of Justice & Public Safety Government of Newfoundland & Labrador
Telephone (709) 729-3703

Northwest Territories
Northwest Territories Emergency Management Organization
24 Hour line: (867) 920-2303

Nova Scotia
Nova Scotia Emergency Management Office
Telephone Toll-free 24 Hour line: 1-866-424-5620

Nunavut
Nunavut Emergency Management
Telephone: (867) 975-5403 / Toll-free 24 Hour line: 1-800-693-1666

Ontario
Emergency Management Ontario
Telephone: (416) 326-8525

Prince Edward Island
Prince Edward Island Emergency Measures Organization
Telephone: (902) 894-0385 / After hours: (902) 892-9365

Quebec
Quebec Ministry of Public Security
Telephone (toll-free): 1-866-644-6826
General information (Services Québec): 1-877-644-4545

Saskatchewan
Saskatchewan Public Safety Agency
Telephone (24/7): 1-800- 667-9660

Yukon
Yukon Emergency Measures Organization
Telephone: (867) 667-5220
Toll free (within the Yukon): 1-800-661-0408`;

  const getResponse = async () => {
    if (!value) {
      setError("Please enter a question");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: `${guideSummary} ${value}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          parts: [{text: value}],
        },
        {
          role: "model",
          parts: [{text: data}],
        },
      ]);
      setValue("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const clear = () => {
    setChatHistory([]);
    setValue("");
    setError("");
  };

  return (
    <div className="app">
      <p>
        What do you want to know?
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="What should I prepare in case of hurricanes?..."
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse}>Ask me</button>}
        {error && <button onClick={clear}>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, _index) => (
          <div key={_index}>
            <p className="answer">
			<strong>{chatItem.role}:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: chatItem.parts
                    .map((part) =>
                      part.text
                        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") 
                        .replace(/\*(.*?)\*/g, "<i>$1</i>")
                        .replace(/\n/g, "<br/>") 
                        .replace(/•/g, "<li>") 
                    )
                    .join(" "),
                }}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GemBot;