import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/contexts/ThemeContext'
import React, { useState } from 'react'
import Navigation from '../components/modules/Navigation'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        credentials: 'include',
        cache: new InMemoryCache()
    })

    return (
        <>
            <Head>
                <title>loop</title>
            </Head>
            <ApolloProvider client={client}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className={theme}>
                        <Navigation />
                        <Component {...pageProps} />
                    </div>
                </ThemeContext.Provider>
            </ApolloProvider>
        </>
    )
}

export default MyApp
