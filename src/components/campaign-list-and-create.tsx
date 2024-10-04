import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, X } from "lucide-react"

interface Campaign {
  id: number
  name: string
  companyDescription: string
}

export function CampaignListAndCreate() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    { id: 1, name: "Summer Promotion", companyDescription: "Promote our new summer product line" },
    { id: 2, name: "Holiday Sale", companyDescription: "Promote our holiday product line" },
    { id: 3, name: "Back to School", companyDescription: "Promote our back to school product line" },
    { id: 4, name: "Spring Clearance", companyDescription: "Promote our spring clearance sale" },
    { id: 5, name: "New Year Deals", companyDescription: "Promote our new year product line" },
    { id: 6, name: "Fall Collection", companyDescription: "Promote our fall product line" },
  ])

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    companyDescription: '',
    productDescription: '',
    targetAudience: ''
  })

  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCampaign(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = campaigns.length + 1
    setCampaigns(prev => [...prev, { id, name: newCampaign.name, companyDescription: newCampaign.companyDescription }])
    setNewCampaign({ name: '', companyDescription: '', productDescription: '', targetAudience: '' })
    setIsFormVisible(false)
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Email Marketing Platform</h1>
        
        <div className="mb-8">
          <Button 
            onClick={() => setIsFormVisible(true)}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
          >
            <PlusCircle className="mr-2" />
            Add Campaign
          </Button>
        </div>

        {isFormVisible && (
          <Card className="bg-white shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-green-700">New Campaign Details</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFormVisible(false)}
                  aria-label="Close form"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-700">Campaign Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={newCampaign.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyDescription" className="block text-sm font-medium text-green-700">Company Description</label>
                  <Textarea
                    id="companyDescription"
                    name="companyDescription"
                    value={newCampaign.companyDescription}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="productDescription" className="block text-sm font-medium text-green-700">Product Description</label>
                  <Textarea
                    id="productDescription"
                    name="productDescription"
                    value={newCampaign.productDescription}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-medium text-green-700">Target Audience</label>
                  <Input
                    id="targetAudience"
                    name="targetAudience"
                    value={newCampaign.targetAudience}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Create Campaign
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-green-600">{campaign.name}</h3>
                <p className="text-green-700 mt-2">{campaign.companyDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}