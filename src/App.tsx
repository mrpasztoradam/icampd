import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import HeroImage from './components/HeroImage'
import TextImage from './components/TextImage'
import SimpleMap from './features/map/SimpleMap'

function App() {
  return (
    <div className="app-container">
      <header className="header-container"></header>
      <main className="main-container">
        <Card
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
          textContent="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
          hasAction
          expandable
        />
        <Card
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
          hasAction
        />
        <Card
          imgSrc="https://placehold.co/250x100/orange/white"
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
          hasAction
        />
        <Card
          imgSrc="https://placehold.co/250x100/orange/white"
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
          hasAction
        />
        <Card
          imgSrc="https://placehold.co/250x100/orange/white"
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
        />
        <Card
          imgSrc="https://placehold.co/250x100/orange/white"
          title="Sample title"
          subtitle="samlpeSubtitle with multiple words, little bit longer then this, so what?..."
        />
        {/* <SimpleMap /> */}
        {/* <TextImage isTextOnLeft /> */}
      </main>
      <nav className="nav-container">
        <div className="nav-item">nav1</div>
        <div className="nav-item">nav2</div>
        <div className="nav-item">nav3</div>
        <div className="nav-item">nav4</div>
      </nav>
    </div>
  )
}

export default App
