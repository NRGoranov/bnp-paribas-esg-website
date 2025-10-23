'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Shield, TrendingUp, Users, Target, AlertTriangle, DollarSign, CheckCircle } from 'lucide-react'

export default function Home() {
  const [activePhase, setActivePhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const phases = [
    { id: 1, title: 'Foundation & Criteria Definition', duration: '2 weeks', description: 'Define 4 ESG criteria, design indicator matrix, set strategic weights, define risk thresholds' },
    { id: 2, title: 'System Integration & Data Sourcing', duration: '2 weeks', description: 'Data sourcing strategy, internal process integration, tool development, training' },
    { id: 3, title: 'Product Assessment & Scoring', duration: '2 weeks', description: 'Indicator status determination, calculate criterion sub-scores, final alignment score' },
    { id: 4, title: 'Underwriting & Pricing Decision', duration: '2 weeks', description: 'Risk vetting against thresholds, mitigation planning, pricing & product labelling' },
    { id: 5, title: 'Review & Improvement', duration: 'Ongoing', description: 'Regulatory reporting, annual weighting review, indicator relevance check' }
  ]

  const esgCriteria = [
    {
      title: 'Environmental Sustainability (E)',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      goal: 'Encourages practices to reduce environmental impact.',
      subCriteria: [
        {
          category: 'Climate Change & Physical Risks',
          items: ['Asset Damage', 'Operational Disruption', 'Underwriting Volatility']
        },
        {
          category: 'Resource Use & Circular Economy Risks',
          items: ['Resource Scarcity', 'Waste and Pollution Liability', 'Client Transition Risk']
        },
        {
          category: 'Transition Risks (Regulatory & Market)',
          items: ['Policy and Regulatory Changes', 'Technology Obsolescence', 'Greenwashing and Reputational Harm']
        },
        {
          category: 'Ecosystem & Biodiversity Risks',
          items: ['Biodiversity Loss Impact', 'Nature-Related Liability', 'Ecosystem Service Disruption']
        }
      ]
    },
    {
      title: 'Social Inclusion (S)',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      goal: 'Accessible to a broad audience.',
      subCriteria: [
        {
          category: 'Regulatory & Legal Risks',
          items: ['Discrimination and Redlining Litigation', 'Accessibility Non-Compliance', 'Data Privacy Violations']
        },
        {
          category: 'Market & Financial Risks',
          items: ['Loss of Untapped Markets', 'Reputational Damage from Exclusion', 'Poor Customer Loyalty']
        },
        {
          category: 'Product & Communication Risks',
          items: ['Inaccessible Product Design', 'Digital Divide', 'Inadequate Crisis Response']
        }
      ]
    },
    {
      title: 'Responsible Investment (R)',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      goal: 'Responsible investment funds.',
      subCriteria: [
        {
          category: 'Reputational & Integrity Risks (Greenwashing)',
          items: ['Greenwashing Litigation', 'Fiduciary Duty Challenge', 'Misalignment of Values']
        },
        {
          category: 'Regulatory & Legal Compliance Risks',
          items: ['Inconsistent ESG Classification', 'Lack of Standardized Data', 'Active Ownership Failure']
        },
        {
          category: 'Financial & Investment Risks',
          items: ['ESG Performance Risk', 'Stranded Assets', 'Concentration Risk']
        }
      ]
    },
    {
      title: 'Shared Value Initiative (SVI)',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      goal: 'BNP Paribas Cardif efforts in CSR - dedicated portion of premium supports relevant social or environmental causes.',
      subCriteria: [
        {
          category: 'Reputational & Trust Risks (Cause-Washing)',
          items: ['Misleading the Customer (Cause-Washing)', 'Misalignment of Corporate Actions', 'Scandal of Partnered Cause']
        },
        {
          category: 'Regulatory & Legal Risks',
          items: ['Transparency and Disclosure Violations', 'Contractual Misrepresentation', 'Accounting and Governance Scrutiny']
        },
        {
          category: 'Operational & Financial Risks',
          items: ['Inconsistent Initiative Funding', 'Ineffective Impact Measurement', 'Competitive Disadvantage']
        }
      ]
    }
  ]

  const stakeholders = [
    { name: 'BNP Paribas Cardif Executive Committee', role: 'Sponsor and approver', impact: 'Highest Impact (Go/No-Go)' },
    { name: 'Project Team', role: 'Define indicators, adopt scoring tool', impact: 'Operational success depends on adoption' },
    { name: 'ESG Compliance Team - Paris', role: 'Provider of mandatory ESG data', impact: 'Data quality determines scoring mechanism' },
    { name: 'PAC (Project Approval Committee)', role: 'Review and authorize new products', impact: 'Highest Operational Impact' },
    { name: 'BNP Paribas Cardif Clients', role: 'Drive market demand for sustainable products', impact: 'Demand validates project financial benefit' }
  ]

  const benefits = [
    { 
      category: 'Financial Savings (Quantifiable)', 
      items: [
        'Lower Cost of Capital: Attract ESG-focused investors',
        'Market Share Gain: Optimized pricing for green products',
        'Operational Savings: 5-10 hours saved per product approval'
      ]
    },
    { 
      category: 'Strategic Benefits (Non-Financial)', 
      items: [
        'Risk Resilience: Portfolio alignment with future regulations',
        'Competitive Advantage: Launch SFDR-aligned products (Article 8 & 9)',
        'Regulatory Trust: Clear, auditable, transparent scoring',
        'Internal Alignment: Unified ESG language across departments'
      ]
    }
  ]

  const risks = [
    { 
      name: 'Lack of Materiality Consensus', 
      mitigation: 'Pre-mortem meeting with senior stakeholders to determine weights and risk tolerances', 
      severity: 'High',
      probability: 'Medium'
    },
    { 
      name: 'Greenwashing Exposure', 
      mitigation: 'Benchmark indicators against leading financial standards (EU Taxonomy, SFDR, NZAOA)', 
      severity: 'High',
      probability: 'Medium'
    },
    { 
      name: 'Data Scarcity/Quality', 
      mitigation: 'Define data requirements early, validate with Legal ESG Team Paris', 
      severity: 'High',
      probability: 'High'
    },
    { 
      name: 'IT Integration Failure', 
      mitigation: 'Agile development approach with frequent integration testing', 
      severity: 'Medium',
      probability: 'Medium'
    },
    { 
      name: 'Underwriter/Actuar Resistance', 
      mitigation: 'Training and commission incentives, demonstrate value-accretive process', 
      severity: 'Medium',
      probability: 'Medium'
    },
    { 
      name: 'Regulatory Change', 
      mitigation: 'Design scoring model with modular flexibility for quick updates', 
      severity: 'High',
      probability: 'Medium'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            ESG Risk Integration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100"
          >
            Sustainable Insurance Solutions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => scrollToSection('about')}
            className="bg-white text-bnp-green px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* About the Project */}
      <section id="about" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              BNP Paribas needs to integrate four ESG criteria in order to be able to manage risks, meet investor expectations, comply with regulations, and create long-term value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Regulatory Pressure</h3>
                <p className="text-sm md:text-base text-gray-600">SFDR, EU Taxonomy compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-yellow-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Investor Demands</h3>
                <p className="text-sm md:text-base text-gray-600">ESG-aligned products required</p>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Risk Management</h3>
                <p className="text-sm md:text-base text-gray-600">ESG risks in insurance products</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Our Solution</h2>
            <div className="bg-gradient-to-r from-bnp-green to-bnp-blue rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <div className="text-white text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">ESG Risk Compilation Survey</h3>
                <p className="text-lg md:text-xl opacity-90">Quantitative scoring framework for insurance product ESG alignment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Risk Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ESG Framework</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Four core criteria with 12 risk indicators
            </p>
          </motion.div>

          {/* ESG Framework Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">ESG Risk Integration Framework</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-800 mb-2">Environmental</h4>
                  <p className="text-sm text-gray-600">Sustainability & Climate</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Social</h4>
                  <p className="text-sm text-gray-600">Inclusion & Fairness</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Governance</h4>
                  <p className="text-sm text-gray-600">Responsible Investment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-orange-800 mb-2">Shared Value</h4>
                  <p className="text-sm text-gray-600">Social Impact</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {esgCriteria.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${criterion.bgColor} p-8 rounded-lg card-hover`}
              >
                <div className="flex items-start mb-6">
                  <criterion.icon className={`w-12 h-12 ${criterion.color} mr-4 flex-shrink-0`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{criterion.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{criterion.goal}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {criterion.subCriteria.map((subCriterion, subIndex) => (
                    <div key={subIndex} className="border-l-2 border-gray-300 pl-4">
                      <h4 className="font-medium text-gray-800 mb-2">{subCriterion.category}</h4>
                      <ul className="space-y-1">
                        {subCriterion.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              BNP Paribas Cardif will be able to evaluate the degree of alignment between the specific features, terms, and risk profile of the insurance product and organization's four risk criteria, which scoring will determine the product's compliance level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3-Step Process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bnp-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">12 Core Indicators</h4>
                    <p className="text-gray-600">Three quantifiable, binary (Yes/No) indicators for each of the four ESG criteria.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bnp-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Weighted Alignment Score</h4>
                    <p className="text-gray-600">Strategic weights applied to sub-scores to determine Total ESG Alignment Score (out of 100).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bnp-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Rating</h4>
                    <p className="text-gray-600">Immediate Final Compliance Rating based on pre-defined risk thresholds.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg order-1 lg:order-2"
            >
              {/* Image Placeholder for ESG Survey Tool Mockup */}
              <div className="bg-gradient-to-br from-bnp-green to-bnp-blue rounded-lg p-8 text-white text-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">ESG Survey Tool</h4>
                <p className="text-sm opacity-90">Interactive questionnaire interface for ESG risk assessment</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-6">Tool Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-bnp-green mr-3" />
                  <span>Customize, control, and align with BNP Paribas Cardiff's ESG requirements</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-bnp-green mr-3" />
                  <span>Develop proprietary ESG scoring model for Cardiff's specific lines</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-bnp-green mr-3" />
                  <span>Ensure adherence to Group's risk appetite</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-bnp-green mr-3" />
                  <span>Standardized compliance assessment and product alignment verification</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 Phases • 8 Weeks
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Timeline - 4 Phases */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
                {phases.slice(0, 4).map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center mb-12"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-bnp-green rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16 bg-white p-6 rounded-lg shadow-lg card-hover w-full max-w-md">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{phase.title}</h3>
                        <span className="text-sm text-bnp-green font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ongoing Process - Right Side */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg shadow-lg h-fit"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ongoing Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">{phases[4].title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{phases[4].description}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-gray-600">
                      Continuous monitoring and improvement of ESG risk assessment framework
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Stakeholders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 Main Stakeholder Groups
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Key Stakeholders</h3>
              <div className="space-y-4">
                {stakeholders.map((stakeholder, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">{stakeholder.name}</h4>
                    <p className="text-sm text-blue-700 mb-1"><strong>Role:</strong> {stakeholder.role}</p>
                    <p className="text-sm text-blue-600"><strong>Impact:</strong> {stakeholder.impact}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    {benefit.category.includes('Financial') ? (
                      <DollarSign className="w-6 h-6 text-bnp-green mr-2" />
                    ) : (
                      <Target className="w-6 h-6 text-bnp-blue mr-2" />
                    )}
                    {benefit.category}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-bnp-green mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Risk Assessment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 Key Risks with Mitigation Strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      risk.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {risk.severity}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      risk.probability === 'High' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {risk.probability}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{risk.name}</h3>
                <p className="text-gray-600 text-sm mb-2"><strong>Mitigation:</strong> {risk.mitigation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimated Savings & Cost */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cost vs. Benefits Analysis
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Implementation Cost</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Team Hours (5 people, 20% allocation)</span>
                  <span className="text-blue-600 font-bold">320 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Project Duration</span>
                  <span className="text-blue-600 font-bold">8 weeks</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Daily Commitment per Person</span>
                  <span className="text-blue-600 font-bold">1.6 hours/day (20% of 8-hour day)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Hourly Rate (Bulgarian Market)</span>
                  <span className="text-blue-600 font-bold">9.61 - 42.67 BGN/hr</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Estimated Cost (BGN)</span>
                    <span className="text-gray-900">3,076 - 13,655 BGN</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    *Based on Bulgarian salary range: 1,665 - 7,391 BGN/month<br/>
                    *Excludes overhead costs (taxes, benefits, social contributions)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-green-600">Potential Savings</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Lower Cost of Capital</span>
                  <span className="text-green-600 font-bold">Attract ESG-focused investors</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Market Share Gain</span>
                  <span className="text-green-600 font-bold">Optimized green product pricing</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Operational Savings</span>
                  <span className="text-green-600 font-bold">5-10 hours per product approval</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Largest Quantifiable Saving</span>
                    <span className="text-green-600">€500K - €5M</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Avoiding potential fines for greenwashing or misreporting under SFDR
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action & Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to implement ESG risk integration?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            {formSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-bnp-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bnp-green focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bnp-green focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bnp-green focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bnp-green focus:border-transparent"
                    placeholder="Tell us about your ESG integration needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-bnp-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Project Team</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              PMI Student Hackathon: Projects Beyond Potential
            </p>
          </motion.div>

          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
            {/* Asie Damyanova */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -15, rotateY: 10, rotateX: 5 }}
              className="w-full max-w-sm bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-400 border border-gray-600 hover:border-bnp-green group"
            >
              <div className="text-center">
                <motion.div 
                  className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-bnp-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-bnp-green/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">AD</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bnp-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-bnp-green transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Asie Damyanova
                </motion.h3>
                <p className="text-bnp-green font-semibold text-sm md:text-base mb-3">Student UNWE</p>
                <motion.div 
                  className="w-12 h-1 bg-bnp-green mx-auto rounded-full opacity-0 group-hover:opacity-100"
                  whileHover={{ width: "3rem", opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Nikolay Goranov */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -15, rotateY: 10, rotateX: 5 }}
              className="w-full max-w-sm bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-400 border border-gray-600 hover:border-bnp-blue group"
            >
              <div className="text-center">
                <motion.div 
                  className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-bnp-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-bnp-blue/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">NG</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bnp-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-bnp-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Nikolay Goranov
                </motion.h3>
                <p className="text-bnp-blue font-semibold text-sm md:text-base mb-3">Student Sofia University</p>
                <motion.div 
                  className="w-12 h-1 bg-bnp-blue mx-auto rounded-full opacity-0 group-hover:opacity-100"
                  whileHover={{ width: "3rem", opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Emil Tsvetanov */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -15, rotateY: 10, rotateX: 5 }}
              className="w-full max-w-sm bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-400 border border-gray-600 hover:border-orange-500 group"
            >
              <div className="text-center">
                <motion.div 
                  className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white">ET</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Emil Tsvetanov
                </motion.h3>
                <p className="text-orange-500 font-semibold text-sm md:text-base mb-3">Student Sofia University</p>
                <motion.div 
                  className="w-12 h-1 bg-orange-500 mx-auto rounded-full opacity-0 group-hover:opacity-100"
                  whileHover={{ width: "3rem", opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="bg-gray-700 rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
              <h4 className="text-base md:text-lg font-semibold mb-2">BNP Paribas Cardif ESG Risk Integration</h4>
              <p className="text-gray-300 text-sm md:text-base">Innovating the way we Move, Learn and Adapt</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">BNP Paribas Cardif ESG Risk Integration</h3>
          <p className="text-gray-400 mb-6">
            Creating sustainable insurance solutions through comprehensive ESG risk assessment.
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 BNP Paribas Cardif. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


