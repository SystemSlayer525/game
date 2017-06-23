/*Javascript*/
<style>
        * { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; z-index: 1 }
        </style>        
 <canvas class="row; animated bounceIn" id="myCanvas" width="960" height="640"></canvas>
     var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
                function drawLives() {
                    ctx.font = "16px Arial";
                    ctx.fillStyle = "#0095DD";
                    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
                }

                Var lives - 3;

                if(!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                
                
                            var cards = ['allies'];   
                        //variable for cards allies 
                        (
cards [0] = 'css/assets/allies/card-thehunter.png';
cards [1] = 'css/assets/allies/card-theadventurer.png';
cards [2] = 'css/assets/allies/card-thechicken.png';
cards [3] = 'css/assets/allies/card-thedrunk.png';
cards [4] = 'css/assets/allies/card-thegoodmage.png';
cards [5] = 'css/assets/allies/card-thepeasant.png';
cards [6] = 'css/assets/allies/card-therebel.png';
cards [7] = 'css/assets/allies/card-thetownguard.png';
                        )
            var cards = ['baddys'];   
                        //variable for cards allies 
                            (
cards [0] = 'css/assets/baddys/card-thegoldenknight.png';
cards [1] = 'css/assets/baddys/card-thejester.png';
cards [2] = 'css/assets/baddys/card-therecruit.png';
cards [3] = 'css/assets/baddys/card-thespy.png';
cards [4] = 'css/assets/baddys/card-thetalon.png';
cards [5] = 'css/assets/baddys/card-thetower.png';
cards [6] = 'css/assets/baddys/card-thetyrant.png';
cards [7] = 'css/assets/baddys/card-thebadmagae.png';
                            )