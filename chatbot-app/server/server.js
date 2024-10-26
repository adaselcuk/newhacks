const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

app.use(cors());
app.use(express.json()); 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.use(bodyParser.json());


app.post("/chatbot", async (req, res) => {
  const { question } = req.body;
  
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant.",
      },
  
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-4o-mini",
    max_tokens: 1000,
  });
  res.send(response.choices[0].message.content);
});

const emergencyGuide = {
	stepsBefore: {
		step1: "Step 1. Know the risks. Although the consequences of various disasters can be similar, knowing the risks in your region can help you better prepare. Across Canada, we face a number of hazards, such as floods in many provinces, earthquakes in British Columbia, blizzards in Nunavut and tornadoes in Ontario. In addition to natural disasters, there are other types of risks, such as power outages and industrial or transportation accidents. Some of the risks below may be relevant to your community. Find out which ones by visiting GetPrepared.ca. You may want to identify the most likely ones for easy reference. You may also want to find out how disasters have impacted Canadians. Learn more about disasters, including those triggered by natural hazards, technological hazards or conflict by using the Canadian Disaster Database at: http://www.publicsafety.gc.ca/cdd. For more emergency preparedness information, visit GetPrepared.ca or follow @Get_Prepared on Twitter.", 
		step2: "Step 2. Make a plan. Every Canadian household needs an emergency plan. It will help you and your family know what to do in case of an emergency. It will take you about 20 minutes to make your plan. Your family may not be together when an emergency occurs. Plan how to meet or how to contact one another, and discuss what you would do in different situations. Use the following pages to create your plan. Most of this information can be filled out on your own. You may need to get some information from your municipality and province/territory about their emergency plans. A list of provincial emergency management agencies is available at the end of this guide. Keep this document in an easy-to-find, easy-to-remember place (for example, with your emergency kit). Photocopy this plan and keep it in your car and/or at work, and a copy close to your phone. If you completed your plan online, keep an electronic version on your computer."
	},

	householdPlan: {
		emergencyExit: "Draw up a floor plan of your home that shows all possible exits from each room. Plan a main exit route and an alternate exit route from each room. Also, identify an evacuation route from your neighbourhood in case you need to leave in a hurry (and think of more than one option).",
		apartment: "Plan to use the stairs instead of the elevators. If you are unable to use the stairs, notify emergency personnel ahead of time.",
		meetingPlace: "Identify safe places where everyone should meet if you cannot go home or you need to evacuate. Have one of each: near your home, outside your neighbourhood and outside your community.",
	}
}
