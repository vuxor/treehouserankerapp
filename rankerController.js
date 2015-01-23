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
       $scope.userFrontendScore.score = "Unpaid Intern";
       $scope.userFrontendScore.description = "You gotta start somewhere :) This is the stage of your career, where you will be fixing broken code on less than sexy features and fixing broken unit tests.";
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
       $scope.userFrontendScore.description = "You are good enough to fix bugs for the engineers that actually know what's up! You even see yourself building 'Help Pages' and other 'Not So Sexy' Pages.";
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
       $scope.userFrontendScore.description = "You are at a point in your career, where your frontend skills are starting to shine and the senior developers only take one glance at your code before tossing it into production. As you have earned their respect.";
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
       $scope.userFrontendScore.description = "Though you have nearly mastered your craft and are the goto guy for the interns and Junior Developers. You now spend 80% of your time coding, 10% mentoring, and the final 10% lending your intellectual skills towards the architecture.";
        $scope.overallScoreCount += 4;
    } else if (
      ($scope.userData.points.HTML +
      $scope.userData.points.CSS +
      $scope.userData.points.Design+
      $scope.userData.points.JavaScript) > 7000
    ) {
     //Set the value for Architect
       $scope.userFrontendScore.score = "Architect- $$$$$";
       $scope.userFrontendScore.description = "You know your features inside and out as you are the man who is leading a small (or sometimes large) brigade in making the world a more web friendly place... but the learning never stops.";
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
        $scope.userBackendScore.description= "The Server-Side is a very scary endeavor, but you should force yourself outside of your comfort zone, as it can be a VERY lucrative journey.";
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
        $scope.userBackendScore.description= "You are slick enough to handle Mapping and Unit Tests on products and features that aren't money makers. But you're in the game and making a pay day!";
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
        $scope.userBackendScore.description= "When a Junior Frontend Developer needs an endpoint for some sweet JSON Data... and none of the other developers have the time to help them..... YOU SHALL BECOME the American Hero, who helps solve their problem.";
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
        $scope.userBackendScore.description= "You are at a point where you are starting to play a more vital role on projects that actually make your company money. You're nowhere near Senior Level, but atleast you have earned the respect of your peers.";
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
        $scope.userBackendScore.description= "The products/Services can handle millions of views per day... and if you're current place of employment were to become the next Google... it could very easily handle BILLIONS.";
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
        $scope.userBackendScore.description= "Everytime TechWarriorz mentions how fast your companies website operates... you're the one to thank. When TechWarriorz discusses the brilliance of the innovation... you'll know that you are the one to thank!";
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
        $scope.userMobileScore.description = "Mobile Development is a beast, though it may seem scary... mobile technology is paying a lot of bills right now. Not a bad idea to pick it up!"
        $scope.overallScoreCount += 0;
    } else     if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 2000 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 500 ) {
    //set the value for Paid Intern
        $scope.userMobileScore.score = "Paid Intern- $";
        $scope.userMobileScore.description = "Are you the guy building the app.... well parts of it, the parts that not a lot of people see, but you're still in the game... and collecting that check!"
        $scope.overallScoreCount += 1;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 4000 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 2000 ) {
    //set the value for Junior Developer
        $scope.userMobileScore.score = "Junior Developer- $$";
        $scope.userMobileScore.description = "You IMPLEMENT the kind of important stuff and you BUILD the not-so-important stuff, but you are starting to hit your stride!"
        $scope.overallScoreCount += 2;
    } else if(
    ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) < 6500 && ($scope.userData.points.iOS +
      $scope.userData.points.Android 
      ) > 4000 ) {
    //set the value for Intermediate Developer
        $scope.userMobileScore.score = "Intermediate Developer- $$$";
        $scope.userMobileScore.description = "You're starting to learn the true meaning of mobile development... and your skills are getting to a point where you are starting to become very dangerous."
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
            $scope.userOverallScore.score = "Passively Learning";
            $scope.userOverallScore.description = "Initially learning anything is a tedious process... but those who can learn to love the chaos typically come out on top. STICK WTIH IT!";
        } else if (($scope.overallScoreCount <= 6) && $scope.overallScoreCount > 3) {
        $scope.userOverallScore.score = "Student";
        $scope.userOverallScore.description = "Every morning, you sip your coffee, and pop on the Treehouse Learning Material... learning the languages that will not only improve your life, but the lives of those around you.";
        } else if (($scope.overallScoreCount <= 9) && $scope.overallScoreCount > 6) {
        $scope.userOverallScore.score = "Industry Standard";
        $scope.userOverallScore.description = "Though you are not the Facebook/MIT Candidate that everyone is drooling over, you can lay down some high quality code!";
        } else if ($scope.overallScoreCount <= 12 && $scope.overallScoreCount > 9) {
        $scope.userOverallScore.score = "Evolving";
        $scope.userOverallScore.description = "By this stage you are starting to master one to two programming languages and have fellow Git-Hubbers constantly seeking your help for their repositories.";
        } else if ($scope.overallScoreCount <= 15 && $scope.overallScoreCount > 12) {
        $scope.userOverallScore.score = "Game Changer";
        $scope.userOverallScore.description = "You are at a stage, where you can easily transfer between programming languages and easily implement new technologies (all you need is the documentation... and you can build whatever you want.";
        } else if ($scope.overallScoreCount > 15) {
        $scope.userOverallScore.score = "The Coder That Everyone Wants!";
        $scope.userOverallScore.description = "You have it all... it doesn't matter whether it is frontend, backend, or mobile... you're the guy that can build products that will take a company public! Every other call you get is front a Hiring Manager (Not a Recruiter) that is willing to pay whatever they need to, to get you on board.";
        }
    
    
    }// end getOverallUserScore
    
//Methods
    $scope.getUserData = function () {
        $scope.overallScoreCount = 0;
      
    $http.get('http://teamtreehouse.com/' + $scope.userName + '.json').success(function (result){
      $scope.togglePage = false;
    $scope.userData = result;
    }).error(function(data){
    alert('Did Not Work, please try again :)');
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