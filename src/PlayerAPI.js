export const PlayerAPI = {
    players: [
        { id: 1, name: 'Rohit Sharma', position: 'Opener' },
        { id: 2, name: 'Shikar Dhawan', position: 'Opener' },
        { id: 3, name: 'Virat Kohli', position: 'One Down' },
        { id: 4, name: 'M S Dhoni', position: 'Keeper' },
        { id: 5, name: 'Kedhar Jadav', position: 'All Rounder' },
        { id: 6, name: 'Hardhik Pandya', position: 'All Rounder' },
        { id: 7, name: 'Ravindra Jadeja', position: 'All Rounder' },
        { id: 8, name: 'Yuzvendra Chahal', position: 'Spinner' },
        { id: 9, name: 'Kuldeep Yadav', position: 'Spinner' },
        { id: 10, name: 'Jasprit Bumrah', position: 'Fast Bowler' },
        { id: 11, name: 'Umesh Yadav', position: 'Fast Bowler' }
    ],
    all: function () {
        return this.players;
    },
    get: function (id) {
        const isPlayer = (p) => p.id === id;
        return this.players.find(isPlayer);
    }
}