var React = require('react');
var Header = require('../components/Header');

var HeaderContainer = React.createClass({
    render: function() {
        return (
            <div className="header">
                <Header/>
            </div>
        );
    }
});

module.exports = HeaderContainer;