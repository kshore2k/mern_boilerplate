const path = require('path');

module.exports = {
    // << ROUTE FUNCTIONS >>
    catch: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    }
};