# -*- coding: utf-8 -*-
"""
Created on Mon Jan  6 13:53:50 2020

@author: a7894
"""

import sys
#from icrawler import get_urls_images
import getimg
from PySide2.QtWidgets import (QLabel, QLineEdit, QPushButton, QApplication,  QVBoxLayout, QDialog)
class Form(QDialog):
    def __init__(self, parent=None):
        super(Form, self).__init__(parent)
        # Create widgets
        self.editUrl = QLineEdit("https://www.gamebase.com.tw/forum/38033/topic/97494527/1#1460716494")
        self.editSaveDir = QLineEdit("C:\\Users\\a7894\\Desktop\\spyder\\img\\")
        self.labelUrl = QLabel(self)
        
        self.button = QPushButton("Image Crawler")
        # Create layout and add widgets
        layout = QVBoxLayout()
        layout.addWidget(self.editUrl)
        layout.addWidget(self.editSaveDir)
        layout.addWidget(self.labelUrl)
        layout.addWidget(self.button)
        # Set dialog layout
        self.setLayout(layout)
        # Add button signal to greetings slot
        self.button.clicked.connect(self.greetings)
    # Greets the user
    def greetings(self):
        self.labelUrl.setText("Hello %s" % self.editUrl.text())
        getimg.getImage(self.editUrl.text(), self.editSaveDir.text())

if __name__ == '__main__':
    # Create the Qt Application
    app = QApplication(sys.argv)
    # Create and show the form
    form = Form()
    form.show()
    # Run the main Qt loop
    sys.exit(app.exec_())