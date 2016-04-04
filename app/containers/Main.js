var React = require('react');
var HeaderContainer = require('./HeaderContainer');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div className="page">
                <HeaderContainer/>
                <section className="content">
                    {this.props.children}
                </section>
            </div>
        )
    }
});

module.exports = HelloWorld;