

/*Be sure to use meaningful variable names and write JSdoc comments for 
findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */
 //The following objects record the season statistics for players on a basketball team.

 const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
 const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
 const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
 const teamStats = [player1, player2, player3];

 /**
  * 
  * @param {Array} teamStatisticsArr from each team
  * @returns {Array} It returns array with total player points
  */
export function findTotalScores(teamStatisticsArr) {
    return teamStatisticsArr.map(player => {
        return{jersey:player.jersey,  total: findTotalPlayerPoints(player)}} );
   
}

/**
 * 
 * @param {Array} player each player
 * @returns {Number} total player points
 */
export function findTotalPlayerPoints(player) {
    return player.stats.reduce((sum, curr)=>sum+=curr.points,0);
}

console.log(findTotalScores(teamStats));