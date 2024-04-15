import React from "react";
import { Box, Typography, Divider, Grid, Paper, IconButton } from "@mui/material";
import { Star as StarIcon, EmojiEvents as TrophyIcon } from "@mui/icons-material";

const CookingAchievements = () => {
  // Sample achievements data
  const achievements = [
    { id: 1, name: "Master Chef", description: "Complete 100 recipes", icon: <TrophyIcon />, completed: true },
    { id: 2, name: "Recipe Explorer", description: "Try 50 different recipes", icon: <StarIcon />, completed: false },
    { id: 3, name: "Kitchen Maestro", description: "Master 10 different cooking techniques.", icon: <StarIcon />, completed: false },
    { id: 4, name: "Culinary Explorer", description: "Try a recipe from each continent.", icon: <StarIcon />, completed: false },
    { id: 5, name: "Gourmet Guru", description: "Cook a dish using exotic ingredients.", icon: <StarIcon />, completed: false },
    { id: 6, name: "Weekend Chef", description: "Prepare a meal entirely from scratch on a weekend.", icon: <StarIcon />, completed: false },
    { id: 7, name: "Seasonal Sensation", description: "Cook a recipe using seasonal ingredients.", icon: <StarIcon />, completed: false },
    { id: 8, name: "Eco-Friendly Eater", description: "Create a zero-waste meal using all parts of the ingredients.", icon: <StarIcon />, completed: false },
    { id: 9, name: "Healthy Habit", description: "Prepare 30 healthy meals in a month.", icon: <StarIcon />, completed: false },
    { id: 10, name: "Cultural Connoisseur", description: "Explore and cook dishes from 10 different cultures.", icon: <StarIcon />, completed: false },
    { id: 11, name: "Kitchen Innovator", description: "Create your own original recipe.", icon: <StarIcon />, completed: false },
    { id: 12, name: "Meal Prep Pro", description: "Successfully meal prep for a week ahead.", icon: <StarIcon />, completed: false },
    { id: 13, name: "Cultural Culinary Connoisseur", description: "Explore a cuisine's rich heritage by preparing a traditional dish while immersing yourself in its accompanying music.", icon: <StarIcon />, completed: false },
    { id: 14, name: "Host Extraordinaire", description: "Showcase your culinary prowess by crafting a meal fit for a party of more than five guests, leaving them impressed and satisfied.", icon: <StarIcon />, completed: false },
    { id: 15, name: "Ingredient Maestro", description: "Create a culinary masterpiece using a diverse array of over ten ingredients, showcasing your ability to harmonize flavors and textures.", icon: <StarIcon />, completed: false },
    { id: 16, name: "Gourmet Getaway", description: "Treat yourself to a day off from cooking and indulge in a delicious meal delivered straight to your door, savoring the flavors without lifting a finger.", icon: <StarIcon />, completed: false },
    { id: 17, name: "Recipe Contributor", description: "Enhance the culinary community by sharing your expertise and adding a delectable recipe to the app, enriching the cooking experience for fellow enthusiasts.", icon: <StarIcon />, completed: false },
    { id: 18, name: "Creative Chef", description: "Unleash your culinary creativity by inventing and naming your own recipe, infusing it with your unique flair and personality.", icon: <StarIcon />, completed: false },
    { id: 1, name: "Quick Chef", description: "Prepare a meal in under 30 minutes.", icon: <StarIcon />, completed: false },
    { id: 2, name: "Perfect Plater", description: "Plate a dish so beautifully it could be in a magazine.", icon: <StarIcon />, completed: false },
    { id: 3, name: "Baking Whiz", description: "Master the art of baking bread from scratch.", icon: <StarIcon />, completed: false },
    { id: 4, name: "Grill Master", description: "Perfectly grill a steak to your desired doneness.", icon: <StarIcon />, completed: false },
    { id: 5, name: "Salad Savant", description: "Create a delicious and unique salad using at least 5 different ingredients.", icon: <StarIcon />, completed: false },
    { id: 6, name: "Soup Sorcerer", description: "Craft a comforting soup from scratch.", icon: <StarIcon />, completed: false },
    { id: 7, name: "Dessert Dynamo", description: "Bake a decadent dessert that wows your taste buds.", icon: <StarIcon />, completed: false },
    { id: 8, name: "Pasta Prodigy", description: "Make fresh pasta from scratch.", icon: <StarIcon />, completed: false },
    { id: 9, name: "Breakfast Boss", description: "Whip up a mouthwatering breakfast feast.", icon: <StarIcon />, completed: false },
    { id: 10, name: "Kitchen Cleanup Crew", description: "Keep your kitchen spotless while cooking.", icon: <StarIcon />, completed: false },
    { id: 11, name: "Recipe Reviewer", description: "Leave insightful reviews on 50 different recipes.", icon: <StarIcon />, completed: false },
    { id: 12, name: "Ingredient Investigator", description: "Explore and experiment with 20 new ingredients.", icon: <StarIcon />, completed: false },
    { id: 13, name: "Leftover Magician", description: "Create a delicious meal using only leftovers.", icon: <StarIcon />, completed: false },
    { id: 14, name: "Food Photographer", description: "Capture stunning photos of your culinary creations.", icon: <StarIcon />, completed: false },
    { id: 15, name: "Tea Time Taster", description: "Enjoy a traditional tea ceremony experience.", icon: <StarIcon />, completed: false },
    { id: 16, name: "Cocktail Craftsman", description: "Mix up a signature cocktail with flair.", icon: <StarIcon />, completed: false },
    { id: 17, name: "Localvore", description: "Cook a meal using only locally sourced ingredients.", icon: <StarIcon />, completed: false },
    { id: 19, name: "Seasoning Sensei", description: "Perfectly season a dish without using a recipe.", icon: <StarIcon />, completed: false },
    { id: 20, name: "Experimental Eater", description: "Try a food you've never eaten before.", icon: <StarIcon />, completed: false },
    { id: 21, name: "Zero-Waste Hero", description: "Successfully minimize food waste in your kitchen.", icon: <StarIcon />, completed: false },
    { id: 22, name: "Vegan Virtuoso", description: "Master the art of vegan cooking.", icon: <StarIcon />, completed: false },
    { id: 23, name: "Culinary Companion", description: "Cook a meal for a friend or loved one.", icon: <StarIcon />, completed: false },
    { id: 24, name: "Food Preservation Pro", description: "Learn to preserve food through canning, pickling, or fermenting.", icon: <StarIcon />, completed: false },
    { id: 25, name: "Egg-cellent Chef", description: "Master cooking eggs in various styles (scrambled, poached, boiled, etc.).", icon: <StarIcon />, completed: false },
    { id: 26, name: "Picnic Picante", description: "Pack the perfect picnic basket for a day out.", icon: <StarIcon />, completed: false },
    { id: 27, name: "Frozen Foodie", description: "Create a delicious meal using only ingredients from your freezer.", icon: <StarIcon />, completed: false },
    { id: 28, name: "Breakfast for Dinner", description: "Enjoy breakfast foods for dinner.", icon: <StarIcon />, completed: false },
    { id: 29, name: "Midnight Munchies", description: "Satisfy those late-night cravings with a homemade snack.", icon: <StarIcon />, completed: false },
    { id: 30, name: "Cooking Class Connoisseur", description: "Attend cooking classes to expand your culinary skills.", icon: <StarIcon />, completed: false },
    { id: 31, name: "International Cuisine Explorer", description: "Prepare a recipe from a neighboring country.", icon: <StarIcon />, completed: false },
    { id: 32, name: "Locally Sourced Gourmet", description: "Purchase all ingredients from local markets and cook a meal.", icon: <StarIcon />, completed: false },
    { id: 33, name: "Patriotic Chef", description: "Source all ingredients exclusively made in your country.", icon: <StarIcon />, completed: false },
    { id: 34, name: "Culinary Critic", description: "Leave a detailed review for at least one recipe.", icon: <StarIcon />, completed: false },
    { id: 35, name: "Food Business Owner", description: "Earn this badge if you own a food-related business.", icon: <StarIcon />, completed: false },
    { id: 36, name: "Industry Insider", description: "Earn this badge if you work in the food industry.", icon: <StarIcon />, completed: false },
    { id: 37, name: "Culinary Degree Holder", description: "Earn this badge if you hold a degree in culinary arts.", icon: <StarIcon />, completed: false },
    { id: 38, name: "Outdoor Epicure", description: "Prepare a meal in an outdoor setting, such as during a hike or picnic.", icon: <StarIcon />, completed: false },
    { id: 39, name: "Culinary Collaboration", description: "Prepare a meal together with someone else.", icon: <StarIcon />, completed: false },
    { id: 40, name: "Budget Gourmet", description: "Prepare a delicious meal on a tight budget.", icon: <StarIcon />, completed: false },
    { id: 41, name: "Luxurious Gastronomy", description: "Prepare a decadent, expensive meal you've always dreamed of.", icon: <StarIcon />, completed: false },
    { id: 42, name: "Cookbook Collector", description: "Purchase a culinary book to expand your knowledge.", icon: <StarIcon />, completed: false },
    { id: 43, name: "Literary Gastronomist", description: "Read at least one culinary book cover to cover.", icon: <StarIcon />, completed: false },
    { id: 44, name: "Nostalgic Chef", description: "Prepare a meal from your childhood.", icon: <StarIcon />, completed: false },
    { id: 45, name: "Campfire Cuisine Connoisseur", description: "Master the art of outdoor cooking by preparing a meal on an open campfire.", icon: <StarIcon />, completed: false },
    { id: 46, name: "Neighborhood Nosh", description: "Strengthen community bonds by preparing and sharing a meal with neighbors.", icon: <StarIcon />, completed: false },
    { id: 46, name: "Global Gastronomy", description: "Embark on a culinary adventure abroad by mastering a local dish in a foreign country.", icon: <StarIcon />, completed: false },
    // Add more achievements as needed
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Cooking Achievements
      </Typography>
      <Divider sx={{ my: "0.5rem" }} />
      <Grid container spacing={2}>
        {achievements.map((achievement) => (
          <Grid key={achievement.id} item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, display: "flex", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.04)" }}>
              {achievement.icon}
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1">{achievement.name}</Typography>
                <Typography variant="body2">{achievement.description}</Typography>
              </Box>
              {achievement.completed && (
                <IconButton disabled>
                  <StarIcon color="primary" />
                </IconButton>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CookingAchievements;

// Cook a recipe of your neighbor country. Buy all ingredients from local market and cook a meal, Buy all ingredients fully made from your country. Review at least one recipe. If you own your food busiens get a badge. If you work in food industry get a badge. If you have degree in colinary get a badge,
// prepare food outside like in a hiking etc,
// Prepare food together with someone,
// Prepare very delicious cheap food,
// Prepare delicous luxiorus, expensive what you dreamed for long time.
// Buy a coolinary book if you dont have,
//Read a at least one coolinary book
// prepare a meal from your childhood

//local family bussiness, advertisment, you can order their food
// challenge of the week or day?
// meal of the day
// coolinary courses
// tips and trucks
// food glossary
