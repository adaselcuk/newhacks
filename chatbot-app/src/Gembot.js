import { useState } from "react";
import "./Gembot.css";

const GemBot = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const guideSummary = {
	summary: `72 Hours: Is Your Family Prepared?
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
Toll free (within the Yukon): 1-800-661-0408`, 
	earthquake: `Although earthquakes cannot be predicted, their effects can be reduced by quick and easy steps you can take before, during, and immediately after the event. There are actions you can take to prepare for an earthquake.

Be aware of the risks specific to your community and region, whether you live there or are just visiting. Provincial and municipal governments may have information on local earthquake and tsunami risk
Prepare your emergency kit Learn more about what items to put in your kit, including quick and easy steps you can take right away
Prepare an emergency kit for your car
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
Consider if earthquake insurance makes sense for your household
Make sure your household knows and practices what to do during an earthquake
Talk to members of your household, including children, about earthquakes so they understand what they are and know what to do in the event of an earthquake
Participate in Great Shakeout earthquake preparedness initiatives and drills in your area. The Great Shakeout typically takes place in October
Check if your wireless phone is compatible with Alert Ready, Canada’s emergency alerting system
Prepare your home
Objects and furniture
Secure tall and/or heavy furniture and appliances to wall studs to prevent tipping, especially if they are in a space where you spend a lot of time. Keep heavy items on lower shelves
Attach flat screen TVs, mirrors, paintings, and other hanging objects securely to a wall so that they will not fall
Keep beds and chairs away from windows and chimneys
Do not hang heavy pictures or objects over beds
Remember that closed curtains and blinds can help stop broken window glass from falling into the room
Put anti-skid pads under TVs, computers, and other small appliances, or secure them with a hook and loop fastener like Velcro, or another similar product, to keep them from falling off counters or cabinets
Use child-proof or safety latches on cupboards to stop contents from spilling-out
Supplies, equipment, and products
Fasten water heaters, refrigerators, stoves, washers, dryers and other heavy appliances to wall studs or the floor. Pay special attention to those that could break gas or water lines if they fall over
Keep flammable items and household chemicals away from stoves, furnaces, and other heat sources and ensure that they are unlikely to spill
Outside your home
Repair potential outdoor hazards such as loose roof shingles, cracked masonry, and awnings
Repair bricks and mortar around chimneys to reduce the chance of dangerous falling debris
Consult a professional to find out more ways you can protect your home, such as bolting the house to its foundation and other structural mitigation techniques
Assess your home to see how your home would stand up to an earthquake`,
	avalanche: `How to prepare before an avalanche
If you live or travel in areas that are at risk of avalanches, take steps to prepare yourself.  If you’re planning outdoor recreation activities in the backcountry, prepare with addtional resources, courses, and essential safety equipment.

Ensure you have an emergency kit for your vehicle
If you plan to recreate in the winter backcountry, learn the basics of identifying avalanche terrain
Be aware of where avalanches can form. They happen on slopes that are at least 25° steep, are at least the size of a tennis court (about 10 m X 10 m) and holding at least 30 cm of snow
Understand the weather factors that can contribute to increased avalanche hazard
Snowing 2 cm/hr for several hours
Strong winds
Sudden warming
Recognize signs that indicate avalanche hazard is elevated
Seeing shooting cracks in the snowpack around your feet
Hearing a wumpf sound from the snowpack beneath your feet
Seeing evidence of recent avalanches on nearby slopes
Check the avalanche forecasts in your area
Never travel alone in avalanche terrain
Road Safety
Most highways in Canada, exposed to avalanche terrain, have control teams that work to prevent avalanches. Occasionally throughout the winter, roads close to allow these teams to use explosives to trigger smaller, controlled avalanches. This lessens the possibility of larger, uncontrolled avalanches occurring when the highway is open.

When highway avalanche control work is occurring, barriers are erected to stop traffic. Never go past a barrier or traffic control person into a closed avalanche zone
If you are travelling through areas of Canada that are exposed to avalanche terrain, pay attention to local weather, news, and information outlets
Stay informed about any road closures planned for avalanche control work
Ensure that you have an emergency vehicle kit with you. Pack extra food, water, and blankets in case of an unexpected and extended road closure due to an avalanche or for avalanche control
Never stop your vehicle in a section of highway that has been marked as an avalanche zone
If you are stopped by an avalanche on the highway, turn around and get out of that zone before calling for help
Outdoor Recreation Safety
Avalanche Canada provides daily avalanche forecasts for popular mountainous regions throughout the winter months. If you are travelling in the backcountry, always check the avalanche forecast before going out
Never go into avalanche terrain alone
Get the training. Take an Avalanche Canada Training course to learn how to recognize avalanche terrain, trip planning, and companion rescue
Get the gear. Everyone in a backcountry group needs to carry the essential avalanche equipment—a transceiver, probe, and shovel—and know how to use it
Companion rescue training is critical. If your group is involved in an avalanche, there is no time to go for help
Research indicates there is just 10 minutes when the odds of recovering a buried victim alive is at 80%
After that 10-minute window, the chances of survival drop steeply
Safety at home
Learn about the history of and potential for avalanches in your area
Learn how to recognize signs of increased avalanche hazard, which includes sustained and significant snowfall, high winds, and/or sudden warming during the winter months
Know who to notify if you recognize these signs (e.g., municipal emergency centres and municipal engineers)`,
	extremeCold: `How to prepare before an extreme cold event
Prepare your emergency kits. Learn more about what items to put in your kit, including quick and easy steps you can take right away
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
Some local governments may offer warming centres during extreme cold events. Check with your city or municipality to learn more
Make sure that you have appropriate winter clothing that is suitable for your region’s winter temperatures for all members of your household, especially infants, young children, and older adults. Recommended items include insulated winter jackets, waterproof footwear, warm socks, gloves or mittens, a toque, and a scarf or face covering
Know your health risks
Ask your health care professional if you have a medical condition that might put you at an increased risk from extreme cold
If you do have health problems, such as a heart condition or other medical issues, you may want to avoid strenuous activities like shoveling snow
Where to get information
Stay connected to weather alert services that share weather warnings, watches, advisories and statements:
WeatherCAN app provides local weather alert notifications
Weather information including public weather alerts across Canada
Weatheradio network hosts a listing of radio weather broadcast frequencies by province or territory
Hello Weather provides forecasts, conditions, and other weather information by telephone
Local radio and television broadcasts will help you stay up to date with the latest local weather information
Prepare your home
Prepare your home for winter temperatures by doing regular maintenance before cold weather starts. Make sure your heating system is working efficiently, that your chimney is clean and ready for use, and that any cracks and drafts are sealed to keep the heat inside
Check on older adult relatives and neighbours to ensure they are warm enough and have sufficient supplies, particularly when the weather is cold or snowy. They may not be able to safely go outside to shop and may require food, medications and other supplies to prepare
Consider installing a backup heat source that can be used in case of a power outage, such as a fireplace that does not require power to operate the exhaust system or a generator that can be used to power an electric space heater or run existing electric heating appliances 
Install certified carbon monoxide alarms with battery backup in hallways, outside of sleeping areas.
Learn more about carbon monoxide and preventing carbon monoxide poisoning
Prepare your vehicle
Get an emergency kit for your car, including winter supplies such as extra blankets and jumper cables
Make sure to keep your gas tank full when periods of extreme cold are forecast
Install winter tires on your vehicle. In some provinces and territories, this is required by law
Learn more about how to prepare your vehicle for cold weather winter driving`,
	extremeHeat: `How to prepare before an extreme heat event
Find out how to keep cool and stay safe when temperatures rise.

Prepare your emergency kits. Learn more about what items to put in your kit, including quick and easy steps you can take right away at no cost
Make a household emergency plan that considers ways to prepare for extreme heat. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with additional health needs
Arrange for regular wellness check-ins or visits in person (or by phone or virtually) several times daily by family, neighbours, or friends
Many local governments offer relief strategies such as cooling centres, extended pool hours, or transportation services during extreme heat events. Check with your city or municipality to learn more
Where to get information
Stay connected to weather alert services that share weather warnings, watches, advisories and statements:
WeatherCAN app provides local weather alert notifications
Weather information including public weather alerts across Canada
Weatheradio network hosts a listing of radio weather broadcast frequencies by province or territory
Hello Weather provides forecasts, conditions, and other weather information by telephone
Local radio and television broadcasts will help you stay up to date with the latest local weather information
Know the health risks of extreme heat
Be aware of your personal risk to extreme heat. Ask a health professional, such as a pharmacist, physician, or nurse practitioner how medications or health conditions may make you more susceptible to the heat
Know the signs and symptoms of heat-related illness and which groups are more at-risk for heat-related illness
During extreme heat events, people may spend more time outdoors. Be aware of extreme heat combined with humidity, wildfire smoke, and sun exposure
Wildfire smoke 101: Combined wildfire smoke and heat
UV index and sun safety - Canada.ca
Prepare your home
If you have an air conditioner, make sure it works properly
If you do not have an air conditioner, consider other ways to keep your home cool such as blocking the sun by closing awnings, curtains or blinds during the day. Opening windows may be advisable if the temperature outdoors is lower than indoors, while being mindful of any outdoor air quality warnings
When your home gets too hot, take advantage of public cooling centers or air-conditioned spaces that you can visit during heat events
If it is safe to do so, leave a couple of windows open at night to take advantage of falling temperatures`,
	flood: `How to prepare before a flood
You can help protect yourself and your household by understanding this natural hazard and by following basic steps.

Prepare your emergency kit. Learn more about what items to put in your kit, including quick and easy steps you can take right away
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
To better prepare for a flooding event, make sure that you know the risks specific to your community, geography, and region:
depending on the geography of a region, low-lying areas can be vulnerable to flooding
get information from your provincial, territorial, or local government on flood risk in your area
consider purchasing flood insurance, if possible
Where to get information
Stay connected to weather alert services that share weather warnings, watches, advisories and statements:
WeatherCAN app provides local weather alert notifications
Weather information including public weather alerts across Canada
Weatheradio network hosts a listing of radio weather broadcast frequencies by province or territory
Hello Weather provides forecasts, conditions, and other weather information by telephone
Local radio and television broadcasts will help you stay up to date with the latest local weather information
Check if your wireless phone is compatible with Alert Ready, Canada's emergency alerting system
Prepare your home
Store important documents at a higher level in your home to protect them from flood damage
Make copies of important documents or digitize them. Include important documents in your emergency kit
Purchase sandbags to prevent water from entering your home
A sandbag wall needs to be two or three times as wide as it is tall
A larger perimeter will require more effort to build and maintain
Plan where you would place sandbags before an emergency
Follow the advice and instructions from emergency responders and local officials
Learn how to turn off the utilities such as electricity and gas in your residence. Local authorities may instruct you to shut off utilities
Determine if there are any special precautions required to safeguard electrical, natural gas, fuel oil, or propane heating equipment. Contact your electricity or fuel supplier for instructions
In a rural farm setting, sheltering livestock may be the wrong thing to do during a flood. Leaving animals unsheltered is preferable because flood waters could trap animals inside a barn
Reduce the risk of flooding
Grade the soil around your home to slope away from your foundation
Keep rain gutters and downspouts clear and ensure that they drain at least two metres away from your foundation
Put weather protection sealant around basement windows and the base of ground-level doors
Consider installing a sump pump and backflow valve or backflow preventer in your basement. A sump pump can remove water that may be accumulating near the foundation or standing water. A backflow valve prevents sewage from flowing into your home if the sanitary sewer is overloaded
Contact your local municipality for details on flood risk reduction in your area
Learn more about how to get Flood Ready and prepare for flooding
Prepare your vehicle
Make sure that your vehicle has enough fuel. If evacuation becomes necessary, there may not be time to stop for gas
Depending on your region and on the distance that you might need to drive, you may want to purchase additional approved gas containers
Keep an emergency kit in your vehicle`,
	hurricane: `What to do when a Hurricane Watch or Warning is issued
Hurricanes can often be predicted one or two days in advance of their landfall. The key to hurricane protection is preparation. By taking precautions before, during, and after a hurricane, lives can be saved and property damage averted.

It is important to stay informed by listening to the latest warnings and advisories on radio, television, or web sites. The Canadian Hurricane Centre will issue and update these when necessary.

If a hurricane is forecast, secure everything that might be blown around or torn loose. Flying objects such as garbage cans and lawn furniture can injure people and damage property.
Trim dead branches and cut down dead trees to reduce the danger of these falling onto your house during a storm.
Stock up on water, ready-to-eat food and heating fuel, as well as battery-powered or wind-up flashlights and radios - and extra batteries. Make sure that there is gasoline in the car. For a complete list of emergency supplies, go to emergency kits. Also, learn what to have in your car emergency kit.
If you live on the coast or in a low-lying area near the coast, be prepared to move inland and to higher ground if instructed by local officials. The high winds can create large waves at sea which may become storm surges when they reach the shore. If you are advised by officials to evacuate, do so. Take your emergency kit with you`,
	landslide: `How to prepare before a landslide
You can protect yourself and your household by understanding this natural hazard and by following basic steps.

Prepare your emergency kit. Learn more about what items to put in your kit, including quick and easy steps you can take right away
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
Stay informed of weather conditions and advisories in your area
Limit the time that you spend in potential landslide areas, specifically during periods of fast snow melt or heavy rainfall
Never stop your vehicle in a section of highway that has been marked as a landslide zone
Be aware of when landslides are more likely to happen, such as during periods of heavy rainfall, fast snowmelt, or changes in temperature from below freezing to above freezing
Learn how to recognize signs of potential slope failure including
slope cracks and cracks at the top of a slope
slope bulges
unusual seepage of water on the slope
small rock or sediment falls
cracks in pavement
structures moving or tilting away
Check if your wireless phone is compatible with Alert Ready, Canada’s emergency alerting system
Prepare your home
Avoid actions that would make slopes unstable
Do not undercut a steep bank
Do not build near the top or base of steep slopes
Do not place fill on steep slopes
Do not drain pools or otherwise increase water flow down steep slopes
Learn about whether your area may be at risk of a landslide. Look out for
existing old landslides
steep slopes
drainage channels on steep slopes
streams and riverbanks
coastal cliffs
Know who to notify if you recognize these signs (find a local municipal contact or ask an expert to conduct an inspection such as a geotechnical engineer)
Regularly inspect your residence, especially after heavy rainfall, rapid snowmelt, long dry spells, and earthquakes`,
	permafrost: `How to prepare for permafrost degradation
Your home may be at risk of structural problems if it is built on soils, especially those with fine materials such as silts and clays. Bedrock usually provides a stable foundation, whereas soils with silts and clays often contain a lot of ice and are vulnerable to permafrost degradation. Soils with well-drained coarser material like sands and gravels are generally less vulnerable to permafrost degradation than soils with fine materials. Wet ground and poor drainage may indicate the presence of silt or clay. A foundation that accommodates thaw, such as an adjustable foundation or piles driven deep into the ground can help reduce the effects of thawing permafrost.

Prepare your home
You can do things that reduce thaw by keeping the area under and around the building as cold as possible.

Around your home
Take actions around your home to prevent or slow the thaw of permafrost.

Keep snow cleared so it does not insulate the ground
Shade south sides of buildings
Promote airflow under buildings in winter by keeping the area under and beside buildings clear and removing snow drifts
Limit removal of natural vegetation and use mulch to reduce warming of the ground in the summer
Ensure water does not accumulate near your home by directing draining away and removing snow piles
Inspect your foundation
Inspect the foundation and interior and exterior of the build and watch for:

cracks in drywall
sticky doors and windows
cracks in foundation
settlement and heaving of buildings
floors or roof lines out of true
If you have an adjustable foundation, you can level your house as required. Help from experts may be required if there are serious issues.`,
	space: `How to prepare before space weather events
Prepare yourself for the possibility of the effects of space weather, including power outages or communications systems outages.

Prepare your emergency kit. Learn more about what items to put in your kit, including quick and easy steps you can take right away at no cost
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
Consider other communications options that you could use in the event that internet and cellphone service is not available
Consider backup power options to charge the electronics you rely on
Consider keeping copies of paper maps in your vehicle in the event satellite navigation systems are not operating
If a major space weather event is forecast, fill vehicle with gas or charge it fully as gas pumps and charging may not work during power outages
Learn more about how to prepare for power outages
Check if your wireless phone is compatible with Alert Ready, Canada’s emergency alerting system`,
	stormSurge: `Before a storm surge
Preparing for a storm surge
Check your house and land for any potential dangers related to flooding. Identify any vulnerability and repair it.
Sandbags are a valuable tool to prevent water from entering your home. This approach requires specific instructions from your local emergency officials.
Learn how to turn off the gas and electricity in your house. You may be instructed by local authorities to shut these off.
If you live in an area that is subject to flooding, do not store your important documents in the basement. Keep them at a higher level, protected from flood damage.
Ensure that your family has an emergency kit and plan.
Ensure your emergency kit is portable, in a back-pack or suitcase with wheels.
Your local chapter of St. John Ambulance can teach you first aid and CPR. Your local Red Cross can teach you survival techniques in the water through their swimming and boating courses.
If a storm surge is forecast
Check supplies including medications, radio, flashlight and batteries.
You may have to evacuate. Keep your emergency kit close at hand.
Make sure the basement windows are closed.
Fuel your car. If evacuation becomes necessary, it will be hard to stop for gas.
If you have any questions or need to know more about evacuation procedures, contact your local emergency management organization, or police or fire department.`,
	tornado: `Warning signs of a potential tornado
Warning signs include:
Severe thunderstorms, with frequent thunder and lightning
An extremely dark sky, sometimes highlighted by green or yellow clouds
A rumbling sound or a whistling sound.
A funnel cloud at the rear base of a thundercloud, often behind a curtain of heavy rain or hail.
Canada's tornado warning system
Environment Canada is responsible for warning the public when conditions exist that may produce tornadoes. It does this through radio, television, newspapers, its internet site, as well as through its weather phone lines.

If you live in one of Canada's high-risk areas, you should listen to your radio during severe thunderstorms.`,
	tsunami: `How to prepare for a tsunami
Check your house and land for any potential dangers related to flooding.
Identify any vulnerability and repair it.
Learn how to turn off the gas and electricity in your house. Local authorities may instruct you to shut these off.
Do not store your important documents in the basement. Keep them at a higher level, protected from flood damage.
Ensure that your family has an emergency kit and plan.
Ensure the emergency kit is portable, in a back-pack or suitcase with wheels.
Your local chapter of St. John Ambulance can teach you first aid and CPR. Your local Red Cross can teach you survival techniques in the water through their swimming and boating courses.
If you have any questions or need to know more about evacuation procedures, contact your local emergency management organization, or police or fire department.

Early warning signs of a tsunami
One of the signs of a potential tsunami is the occurrence of a very large earthquake that lasts for more than 20 seconds. If an area has been shaken by a very large earthquake, one should be on alert that shorelines located within the radius of the earthquake's epicentre, may be hit by a tsunami.
A more immediate and ominous sign of an approaching tsunami is a rapid and unexpected recession of water levels below the expected low tide. This can occur minutes before the shoreline is struck by a tsunami and can be the only sign along coastlines that are located too far from the earthquake epicentre to have felt the shaking.
A tsunami may also occur with very little warning.
Natural Resources Canada's seismologists monitor for such events, around the clock. As soon as possible, a tsunami warning is issued to media and municipalities in regions where a tsunami is likely to hit.
The Canadian Coast Guard's Marine Communications Traffic Services broadcasts tsunami alerts to mariners.
When you get warning of a tsunami, if there is time, move to higher ground immediately.`,
	wildfire: `How to prepare before a wildfire
Educate the members of your household. Make sure that your family and the members of your household are prepared, should a wildfire occur or should your area be impacted by wildfire smoke:

Make a household emergency plan: Consider the specific needs of all members of your household, including older adults, anyone with special health needs, children, children, pets and service animals
Prepare your emergency kits: learn more about what items to put in your kit, including quick and easy steps you can take right away
Practice your primary escape route, as well as alternative routes out of your community
Be familiar with local, provincial, territorial emergency management organizations, their plans and evacuation procedures
Take time to learn about emergency planning in your area, as some things are different between cities and provinces
Stay informed of weather conditions and advisories in your area
Be aware of wildfire smoke, its impact on air quality and health
Stay informed about wildfire conditions
Check if your wireless phone is compatible with Alert Ready, Canada’s emergency alerting system
Prepare your home
Preventative measures can help protect your home and property before an emergency occurs:

Remove any fire hazards in and around your home, such as dried out branches, leaves and debris
FireSmart Canada has information and resources to increase the resiliency of your home and your community to wildfires
Keep a sprinkler in good working condition available
Have smoke detectors on every level of your home, preferably in every bedroom
Test smoke detectors once a month. Replace batteries every 6 months. Replace the smoke detector every 10 years
Have carbon monoxide alarms in your home that are in proper working order
Consult with your local fire department or a qualified engineer about making your home fire-resistant
Know how to turn off the utilities in your residence. Local authorities may instruct you to shut them off
Prepare for wildfire smoke
Smoke from wildfires can be a major source of air pollution. During heavy smoke conditions, everyone is at risk regardless of their age or health but some people are more likely to be at risk. Actions to prepare your home for wildfire smoke include:

Properly seal windows and doors
Consider purchasing one or more certified, properly-sized portable air purifiers
Purchase a clean, good quality air filter for your ventilation system and air purifiers, and have extra filters available
Reduce other sources of indoor air pollution and take steps to improve air quality in your home
Be familiar with:
Air Quality Health Index (AQHI)
Info-Smog (QC) observation and forecasts
WeatherCan app for weather warnings and air quality advisories in your area
Weather alerts and air quality advisories
Be ready to evacuate
Make sure that your vehicle is fully fueled. If evacuated, stopping to refuel could be difficult depending on your region or distances
Check on elderly relatives and neighbours to see if they require assistance
If you need assistance, place a help sign in your window
If on a farm/ranch, it is preferable to leave animals unsheltered. If time and personal safety permits, move them away from the danger zone
Learn more about who does what during an emergency
Learn more from your provincial or territorial emergency management organization`,
	winterStorm: `How to prepare before a winter storm
A major winter storm can last for days and make travel difficult. It is important to ensure there are enough supplies at home until conditions improve.

Prepare your emergency kit. Learn more about what items to put in your kit, including quick and easy steps you can take right away
Make a household emergency plan. Consider the specific needs of all members of your household, including older adults, children, pets, and anyone with special health needs
Protect yourself from carbon monoxide poisoning in the event of a power outage
If you must travel during winter weather, take safety precautions and plan your trip
Have a plan to shelter pets and farm animals
Check on older adult relatives and neighbours to ensure they have sufficient supplies when a winter storm is expected. They may not be able to safely go outside to shop and may require food, medications, and other supplies to prepare
Where to get information
Stay connected to weather alert services that share weather warnings, watches, advisories and statements:
WeatherCAN app provides local weather alert notifications
Weather information including public weather alerts across Canada
Weatheradio network hosts a listing of radio weather broadcast frequencies by province or territory
Hello Weather provides forecasts, conditions, and other weather information by telephone
Local radio and television broadcasts will help you stay up to date with the latest local weather information
Prepare your home
Take steps to winterize your home including:
insulating walls and attics
caulking and weather-stripping doors and windows
installing outdoor storm windows or covering windows with plastic indoors
Have shovels, salt, and snow removal supplies in an  easily accessed place
Install snow fences in rural areas to reduce drifting snow on roads and paths
Check your house including your roof for damage
Consider having an alternate power source (e.g., outdoor generator) in case you lose power for an extended period of time
Consider having a backup heat source (e.g., fireplace, wood stove, or space heater) so that you can stay warm
If required, string a lifeline (such as a rope) between your house and any outbuildings that you might have to access during the winter
Learn more about how to prepare for extreme cold
Prevent carbon monoxide poisoning
Install certified carbon monoxide alarms with battery backup in hallways and outside of sleeping areas
If you have fuel burning appliances such as stoves or fireplaces, make sure they are well maintained and working properly
Clean your chimney and flues
Never use a fuel-burning generator or fuel-burning cooking equipment such as BBQs or camping stoves inside a home, garage, basement, crawlspace or shed, or under a covered area outside the house (such as under an awning or gazebo)
Operate portable generators at least 6 metres (20 feet) from all homes or buildings. Direct the exhaust away from open windows and doors. Close all windows and doors closest to or downwind from the generator
If you use your vehicle to charge electronics or warm up, do not idle your vehicle in a garage, even with the garage door open
Ensure proper ventilation if using fuel-burning appliances
Learn more about carbon monoxide and preventing carbon monoxide poisoning
Prepare your vehicle
Be ready to change or cancel your travel plans if hazardous travel conditions are expected
Get a vehicle emergency kit including winter supplies
Ensure your vehicle is prepared for winter conditions, such as having winter tires  a full tank of gas and plenty of  windshield washer fluid`,

};

const getDisasterGuide = (question) => {
	const disaster = Object.keys(guideSummary).find((key) =>
	  question.toLowerCase().includes(key)
	);
	return disaster ? guideSummary[disaster] : guideSummary.summary;
  };

  const getResponse = async () => {
    if (!value) {
      setError("Please enter a question");
      return;
    }

	const selectedGuide = getDisasterGuide(value);
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: `${selectedGuide} ${value}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/gemini`, {options});
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
    <div className="gembot">
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