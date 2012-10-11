/* Get iOS Version */

function getOsVersion() {
    var agent = window.navigator.userAgent,
        start = agent.indexOf( 'OS ' );

    if( ( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ) && start > -1 ){
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    } else {
        return 0;
    };
    
}