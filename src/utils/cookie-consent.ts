import "vanilla-cookieconsent/dist/cookieconsent.css";
import "../styles/cooke-consent-custom.css";
import * as CookieConsent from "vanilla-cookieconsent";

CookieConsent.run({
    root: "#cc-root",
  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {},
  },
  revision: 1,
  guiOptions: {
    consentModal: {
        layout: 'bar inline',
        flipButtons: false,
        equalWeightButtons: true
    }
  },
  
  language: {
    default: "th",
      translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'Cookie modal description',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage Individual preferences'
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Accept current selection',
          closeIconLabel: 'Close modal',
          sections: [
            {
              title: 'Somebody said ... cookies?',
              description: 'I want one!'
            },
            {
              title: 'Strictly Necessary cookies',
              description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary'
            },
            {
              title: 'Performance and Analytics',
              description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
              linkedCategory: 'analytics'
            },
            {
              title: 'More information',
              description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
            }
          ]
        }
      },
      th: {
        consentModal: {
          title: 'เว็บไซต์มีการใช้งานคุกกี้',
          description: 'เราใช้คุกกี้เพื่อปรับปรุงไซต์ของเราและประสบการณ์ของคุณ อ่านเพิ่มเติมได้ที่ <a href="/privacy-policy" target="_blank">นโยบายส่วนบุคคล<a>',
          acceptAllBtn: 'ยอมรับทั้งหมด',
          acceptNecessaryBtn: 'ปฏิเสธทั้งหมด',
          showPreferencesBtn: 'จัดการการตั้งค่า'
        },
        preferencesModal: {
          title: 'การตั้งค่าความเป็นส่วนตัว',
          acceptAllBtn: 'ยอมรับทั้งหมด',
          acceptNecessaryBtn: 'ปฏิเสธทั้งหมด',
          savePreferencesBtn: 'ยอมรับการเลือกปัจจุบัน',
          closeIconLabel: 'ปิดหน้าต่าง',
          sections: [
            {
              title: 'คุกกี้ที่จำเป็นอย่างยิ่ง',
              description: 'คุกกี้พื้นฐานที่จำเป็น เพื่อช่วยให้การทำงานหลักของเว็บไซต์ใช้งานได้ รวมถึงการเข้าถึงพื้นที่ที่ปลอดภัยต่าง ๆ ของเว็บไซต์ หากไม่มีคุกกี้นี้เว็บไซต์จะไม่สามารถทำงานได้อย่างเหมาะสม และจะใช้งานได้โดยการตั้งค่าเริ่มต้น โดยไม่สามารถปิดการใช้งานได้',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary'
            },
            {
              title: 'ประสิทธิภาพและการวิเคราะห์',
              description: 'คุกกี้ในส่วนวิเคราะห์ จะช่วยให้เว็บไซต์เข้าใจรูปแบบการใช้งานของผู้เข้าชมและจะช่วยปรับปรุงประสบการณ์การใช้งาน โดยการเก็บรวบรวมข้อมูลและรายงานผลการใช้งานของผู้ใช้งาน',
              linkedCategory: 'analytics'
            },
            {
              title: 'ข้อมูลเพิ่มเติม',
              description: 'สำหรับคำถามใด ๆ เกี่ยวกับนโยบายคุกกี้ของเราและตัวเลือกของคุณ โปรด <a href="/contact">ติดต่อเรา</a>'
            }
          ]
        }
      }
    }
  }
});