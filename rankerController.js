var RankerController = function ($scope, $http){

//Variables
$scope.userName= "rickdawson";
$scope.userData= {};
$scope.overallScoreCount = 0;
$scope.userBackendScore= {
    score: "",
    description: ""
};
$scope.userFrontendScore= {
    score: "",
    description: ""
};
$scope.userMobileScore= {
    score: "",
    description: ""
};
$scope.userOverallScore= {
    score: "",
    description: ""
};

$scope.togglePage = true;


//Set the points for the frontend score!
$scope.getUserFrontendScore = function () {    
// Set Frontend Points
    if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) < 500
    ) {
     //Set the value for unpaid intern
       $scope.userFrontendScore.score = "Intern";
       $scope.userFrontendScore.description = "No one will pay you for your below-below mediocre skills.";
        $scope.overallScoreCount += 0;
    } else  if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) < 1500 && ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 500
    ) {
     //Set the value for paid intern
       $scope.userFrontendScore.score = "Paid Intern- $";
       $scope.userFrontendScore.description = "Your frontend skills are at a point, where you can trick people into paying you for 20 weekly hours of servitude.";
        $scope.overallScoreCount += 1;
    } else if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) < 3000 && ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 1500
    ) {
     //Set the value for Junior Developer
       $scope.userFrontendScore.score = "Junior Developer- $$";
       $scope.userFrontendScore.description = "You are good enough to fix bugs from the engineers that actually know what's up!";
        $scope.overallScoreCount += 2;
    } else if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) < 5000 && ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 3000
    ) {
     //Set the value for Intermediate Developer
       $scope.userFrontendScore.score = "Intermediate Developer- $$$";
       $scope.userFrontendScore.description = "You are good enough to build the pages that the 'Cool Developers' are too cool to make!";
        $scope.overallScoreCount += 3;
    } else if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) < 7000 && ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 5000
    ) {
     //Set the value for Senior Developer
       $scope.userFrontendScore.score = "Senior Developer- $$$$";
       $scope.userFrontendScore.description = "Though you have nearly mastered your craft, you are still the bitch of the Architect!";
        $scope.overallScoreCount += 4;
    } else if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 7000
    ) {
     //Set the value for Architect
       $scope.userFrontendScore.score = "Architect- $$$$$";
       $scope.userFrontendScore.description = "You are the overlord, even the suits are afraid to piss you off... as you are the one who is TRULY running the show.";
        $scope.overallScoreCount += 5;
    }
};
    //Set our backend score
    $scope.getBackendUserScore = function() {
        if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 1000
    ) {
    //set the value for unpaid intern
        $scope.userBackendScore.score = "Unpaid Intern- :(";
        $scope.userBackendScore.description= "You don't know the difference between backend and a raunchy anal Ron Jeremy Film.";
        $scope.overallScoreCount += 0;
        } else      if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 2500 && ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 1000
    ) {
    //set the value for paid intern
        $scope.userBackendScore.score = "Paid Intern- $";
        $scope.userBackendScore.description= "You are good enough to Unit Test the Unit Tests of the Unit Tests.... of the Servers";
        $scope.overallScoreCount += 1;
        } else if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 5000 && ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 2500
    ) {
    //set the value for Junior Developer
        $scope.userBackendScore.score = "Junior Developer- $$";
        $scope.userBackendScore.description= "You map EndPoints for the less cool frontend developers!";
        $scope.overallScoreCount += 2;
        } else if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 7000 && ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 5000
    ) {
    //set the value for Intermediate Developer
        $scope.userBackendScore.score = "Intermediate Developer- $$$";
        $scope.userBackendScore.description= "You good enough to scale things that no one outside of the organization will ever see";
        $scope.overallScoreCount += 3;
        } else if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 10000 && ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 7000
    ) {
    //set the value for Senior Developer
        $scope.userBackendScore.score = "Senior Developer- $$$$";
        $scope.userBackendScore.description= "The Company knows that without you, their customers would leave due to their products moving at a snails pace.";
        $scope.overallScoreCount += 4;
        } else if (
   ($scope.userData.points.Ruby+
   $scope.userData.points.PHP +
   $scope.userData.points.WordPress+
   $scope.userData.points.Python+
   $scope.userData.points.Java) < 10000
    ) {
    //set the value for Architect
        $scope.userBackendScore.score = "Architect- $$$$$";
        $scope.userBackendScore.description= "You run shit! You are the heart and soul of any project you work on... and you can ruin A LOT of lives if you choose.";
        $scope.overallScoreCount += 5;
        }
    
    }; //end of getBackendUserScore
    
// Get User Score for their Mobile Super Duper Skills!!!!BITCH!
    $scope.getMobileUserScore = function () {
    if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 500) {
    //set the value for Unpaid Intern
        $scope.userMobileScore.score = "Unpaid Intern- :(";
        $scope.userMobileScore.description = "You are probably one of those guys who can't even navigate through an mobile app... let alone even know where to begin to code one."
        $scope.overallScoreCount += 0;
    } else     if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 2000 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 500 ) {
    //set the value for Paid Intern
        $scope.userMobileScore.score = "Paid Intern- $";
        $scope.userMobileScore.description = "You are barely good enough to deal with minor tasks on apps that may get downloaded over 200 times."
        $scope.overallScoreCount += 1;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 4000 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 2000 ) {
    //set the value for Junior Developer
        $scope.userMobileScore.score = "Junior Developer- $$";
        $scope.userMobileScore.description = "You IMPLEMENT... Features that no one really sees nor cares about."
        $scope.overallScoreCount += 2;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 6500 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 4000 ) {
    //set the value for Intermediate Developer
        $scope.userMobileScore.score = "Intermediate Developer- $$$";
        $scope.userMobileScore.description = "You get to do unattractive bitch work that the Senior Mobile Developers are too busy whacking off to get to."
        $scope.overallScoreCount += 3;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 10000 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 6500 ) {
    //set the value for Paid Intern
        $scope.userMobileScore.score = "Senior Developer- $$$$";
        $scope.userMobileScore.description = "Your features are what TechWarriorz are buzzing about! But the Architect still gets center stage."
        $scope.overallScoreCount += 4;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 10000 ) {
    //set the value for Paid Intern
        $scope.userMobileScore.score = "Architect- $$$$$";
        $scope.userMobileScore.description = "Your apps are solid... you are gratiously overpaid... and you have a mass quantity of both fan boys and haters.";
        $scope.overallScoreCount += 5;
    }
        
        
    }; //end of getMobileUserScore
    
    $scope.getOverallUserScore = function () {
        if ($scope.overallScoreCount < 3) {
            $scope.userOverallScore.score = "Minimal";
            $scope.userOverallScore.description = "You're either new or you're just simply not trying very hard... study some more Treehouse or books.... or youtube.... or any other free resource before you miss the boom!";
        } else if (($scope.overallScoreCount <= 6) && $scope.overallScoreCount > 3) {
        $scope.userOverallScore.score = "Below Mediocre";
        $scope.userOverallScore.description = "Unlike those who give a minimal effort, you put your daily hour in... but you lack the passion needed to be decent.";
        } else if (($scope.overallScoreCount <= 9) && $scope.overallScoreCount > 6) {
        $scope.userOverallScore.score = "Mediocre";
        $scope.userOverallScore.description = "You're good enough to be 'In The Show', but your not good enough to standout!";
        } else if ($scope.overallScoreCount <= 12 && $scope.overallScoreCount > 9) {
        $scope.userOverallScore.score = "Good, but not Great";
        $scope.userOverallScore.description = "You are good at one or more pieces of the the pie, but you don't have what it takes to be a diebetic.";
        } else if ($scope.overallScoreCount <= 15 && $scope.overallScoreCount > 12) {
        $scope.userOverallScore.score = "Great";
        $scope.userOverallScore.description = "You have 1-2 portions of development mastered, and you are always looking to improve as a developer.";
        } else if ($scope.overallScoreCount > 15) {
        $scope.userOverallScore.score = "Coding Super-Mastermind!";
        $scope.userOverallScore.description = "You are an icon amongst programming geeks... when a junior developer gets into trouble, you're typically the first guy that they go to see.";
        }
    
    
    }// end getOverallUserScore
    
//Methods
    $scope.getUserData = function () {
        $scope.overallScoreCount = 0;
      
    $http.get('http://teamtreehouse.com/' + $scope.userName + '.json').success(function (result){
      $scope.togglePage = false;
    $scope.userData = result;
    }).error(function(data){
    alert('Did Not Work, you dummy!');
    });
    };
    
    $scope.resetSearch = function () {
        $scope.overallScoreCount = 0;
        $scope.userName = "";
        $scope.togglePage = true;
        $scope.userData = {};
    }

//Inits

//Watch
    $scope.$watch('userData.points.HTML', function(){
        $scope.getUserFrontendScore();
        $scope.getBackendUserScore();
        $scope.getMobileUserScore();
         
    });
    
    $scope.$watch('overallScoreCount', function() {
       $scope.getOverallUserScore();
    });
    
}; // End of controller