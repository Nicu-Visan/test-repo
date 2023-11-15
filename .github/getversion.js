const conventionalRecommendedBump = require(`conventional-recommended-bump`);

(async function(){
  const recommendation = await conventionalRecommendedBump({
    preset: `conventionalcommits`
  });
  console.log(recommendation.releaseType);
})()