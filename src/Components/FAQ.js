import './FAQ.css';
import Pinksection from './Pinksection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'Are dry flowers dangerous',
      answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    },
    {
        question: 'Are dry flowers dangerous',
        answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    },
    {
      question: 'Are dry flowers dangerous',
      answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    },
    {
        question: 'Are dry flowers dangerous',
        answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    },
    {
      question: 'Are dry flowers dangerous',
      answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    },
    {
        question: 'Are dry flowers dangerous',
        answer: 'We make them infuged so the chances to catch a big fire are minimal, but anyways, we advise you to remove big flowers before.',
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Pinksection
        title={"Frequently Asked Questions"}
        paragraph={"Here you can find most of the answers regarding our company. For any further assistance feel free to contact us"}
      />
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button onClick={() => toggleAccordion(index)}>
              <h2>{faq.question}</h2>
              <span className={openIndex === index ? 'minimize-icon' : 'expand-icon'}>
                <FontAwesomeIcon className='footer-icon' icon={openIndex === index ? faChevronUp : faChevronDown} />
              </span>
            </button>
            {openIndex === index && (
              <p className='answer1-p'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;