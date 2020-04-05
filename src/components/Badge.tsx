import React from 'react';

interface Props {
    user: string,
    repo: string,
    ghash: string | undefined
}

const Badge: React.FC<Props> = ({user, repo, ghash}) => (

    ghash !== undefined ?
        <>
                    <span className="text-muted">©2019 <a className={'footerLink'}
                                                          href="http://www.appsource.nl">Appsource</a>
                    </span> - <a href={'https://github.com/' + user + '/' + repo + '/commit/' + ghash}>
            <img alt="Latest badge"
                 src={'https://badge.odee.net/github/sha/' + user + '/' + repo + '/master/' + ghash + '/badge.svg'}/>
        </a>
        </> : null
);

export default Badge;



