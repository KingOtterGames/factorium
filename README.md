# Using the Dispatcher
dispatch({
    action: ModuleExampleActions.example,
    payload: {},
})

# Prototype
Factorium is a prototype concept, built to test different concepts with automation, resource management, and optimization. The focus is not on the UI and more around game design and mechanics. Nothing in this will likely be novel or totally unexplored territory, but hoping it will be insightful for future game development for my other games.

# Game Loop
1. Early Resource Extraction and Initial Setup
2. Building and Automation
3. Scaling and Optimizing
4. Defending Threats
5. Iteration (A critical requirement in these kinds of games)

# Reasons Factory Games are Fun Hypothesis
1. Solving Optimization Puzzles
2. Testing the defenses you spent time building
3. Unlocking new technology and playing with it
4. Production numbers going up

# Premise of the Game
The goal is simple. Build a Dimension Generator and save humanity.

---------------------------- Mechanics ----------------------------------------
# Land as a Resource
1. Each Land will have limited resources.
2. Player will choose their starting area.
3. Players will get a view of total resources, with more resources unlocking as they advance.
4. Connect transports between lands.
5. Eventually, similar to Minecraft, you can create farms that generate resources instead of needing to just harvest.
6. Land will have limited space for machines.
7. Distance between land will affect transportation of goods between each other. 

# Resource Extraction
1. Players will start off with a couple basic actions, which increases generation for that resource
2. Resources deplete, but there will be a good amount and player actions will do VERY little
3. Machines can be built, like drills, that also do those actions and harvest materials much faster
4. Machines will have power requirements
5. These machines will take up space, which is limited

# Building and Automation
1. Players will unlock buildings as they research them
2. Buildings cost resources and have special functions
3. Buildings have configuration options and bottlenecks
4. Transfer things between land so you can focus things in certain areas
5. These buildings will be heavy on electricity

---------------------------- Harvestable Resources ----------------------------------------
Tier I
1. Wood
2. Stone
3. Coal
4. Sapplings
5. Wheat

Tier II
1. Iron Ore
2. Copper Ore
3. Gold Ore
4. Mindstone

Tier III
1. Zinc
2. Diamond
3. Voltstone

Liquids
1. Water
2. Steam
3. Lava
4. Sewage Water

---------------------------- Craftable Resources ----------------------------------------
1.  Brass
    - Zinc
    - Copper
2.  Coal
    - Wood

---------------------------- Harvesting Machines ----------------------------------------
1. Coal Drill
    - Requires: Coal
    - Configured Harvest: Any Ores
2. Electrical Drill
    - Requires: Electricity
    - Configured Harvest: Any Ores
3. Coal Harvester
    - Requires: Coal
    - Configured Harvest: Wood & Wheat
4. Electrical Harvester
    - Requires: Electricity
    - Configured Harvest: Wood & Wheat
5. Water Pump
    - Requires: Electricity
    - Configured Harvest: Water
6. Atmospheric Condenser
    - Requires: Electricity
    - Configured Harvest: Water

----------------------------- Producer Machines -----------------------------------------
1. Furnace
    - Requires: Coal
    - Intake: Ores
    - Output: Ingots
2. Paper Mill
    - Requires: Electricity
    - Intake: Water + Wood
    - Output: Wood Fibers
3. Press
    - Requires: Electricity
    - Intake: Water + Wood Fibers
    - Output: Paper
4. Biofuel Refinery
    - Requires: Electricity
    - Intake: Water + Wheat
    - Output: Biofuel (Liquid)
5. Sewage Plant
    - Requires: Electricity
    - Intake: Sewage Water
    - Output: Water

----------------------------- Sustainable Machines --------------------------------------
1. Planters
    - Requires: Sapplings
    - Adds More: Wood

------------------------------- Transportation ------------------------------------------
1. Pipes
2. Belts

------------------------------- Storage -----------------------------------------------
1. Fluid Storage
2. Chests

------------------------------- Husbandry ---------------------------------------------
1.  Cows
    - Leather
    - Meat